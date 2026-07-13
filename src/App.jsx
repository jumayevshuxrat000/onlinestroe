import React, { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import CategoriesPage from "./pages/CategoriesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import { products as allProducts } from "./data/products";
import {
  ShoppingBag,
  Search,
  Heart,
  ShoppingCart,
  User,
  LayoutGrid,
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Menu,
  X,
  Headphones,
  Truck,
  ShieldCheck,
  RotateCcw,
  Award,
  Laptop,
  Shirt,
  Footprints,
  Watch,
  Sparkles,
  Camera,
  Dumbbell,
  ChevronRight,
  Zap,
  Plus,
  Minus,
  Trash2,
  Eye,
  Mail,
  Lock,
  Loader2,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import {
  CartProvider,
  WishlistProvider,
  useCart,
  useWishlist,
} from "./contexts/StoreContext";

/* ============================================================
   2) LOGIN SAHIFASI (modal sifatida ochiladi)
   ============================================================ */
function fakeLoginApi({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error("Email va parolni kiriting"));
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        reject(new Error("Email formati noto'g'ri"));
        return;
      }
      if (password.length < 6) {
        reject(new Error("Parol kamida 6 ta belgidan iborat bo'lishi kerak"));
        return;
      }
      resolve({
        user: { email, name: email.split("@")[0] },
        token: "demo-token-" + Math.random().toString(36).slice(2),
      });
    }, 1200);
  });
}

function fakeSocialLoginApi(provider) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: { name: "Demo User" }, provider });
    }, 900);
  });
}

function LuxoraLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fakeLoginApi({ email, password });
      setSuccess(`Xush kelibsiz, ${res.user.name}!`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSocial(provider) {
    setError("");
    setSuccess("");
    setSocialLoading(provider);
    try {
      const res = await fakeSocialLoginApi(provider);
      setSuccess(`${provider} orqali kirildi: ${res.user.name}`);
    } finally {
      setSocialLoading(null);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #3b2f66 0%, transparent 45%), radial-gradient(circle at 80% 70%, #2b3d7a 0%, transparent 50%), linear-gradient(135deg, #14132bcc 0%, #1b1f3acc 50%, #23285ccc 100%)",
      }}
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1c1f3a]/90 backdrop-blur-xl shadow-2xl px-5 sm:px-8 py-7 sm:py-9 relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-col items-center text-center">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
          </div>
          <h1 className="text-white text-xl sm:text-2xl font-bold">Welcome Back</h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Sign in to your Luxora account
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-6">
          <button
            type="button"
            onClick={() => handleSocial("Google")}
            disabled={socialLoading !== null}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-semibold py-2.5 disabled:opacity-60"
          >
            {socialLoading === "Google" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocial("Apple")}
            disabled={socialLoading !== null}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-semibold py-2.5 disabled:opacity-60"
          >
            {socialLoading === "Apple" ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <AppleIcon />
            )}
            Apple
          </button>
        </div>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-slate-400 text-xs whitespace-nowrap">
            or sign in with email
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@luxora.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm pl-10 pr-4 py-2.5 outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 text-sm pl-10 pr-4 py-2.5 outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-white/20 bg-white/5 accent-indigo-500"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Forgot password?
            </a>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
          {success && (
            <p className="text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl text-white text-sm font-semibold py-3 shadow-lg transition disabled:opacity-70 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
            }}
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M16.365 1.43c0 1.14-.415 2.06-1.245 2.79-.83.73-1.83 1.15-3 .95a3.94 3.94 0 011.06-2.9c.83-.9 2.25-1.55 3.18-1.6.02.24 0 .5-.01.76zm3.5 15.65c-.48 1.08-.7 1.55-1.32 2.5-.86 1.3-2.08 2.93-3.6 2.94-1.35.02-1.7-.88-3.53-.87-1.83.01-2.22.89-3.57.87-1.51-.02-2.68-1.48-3.54-2.78-2.43-3.7-2.69-8.04-1.19-10.35.98-1.5 2.53-2.4 4.15-2.42 1.4-.03 2.44.94 3.53.94 1.09 0 2.6-1.16 4.31-.99.73.03 2.79.3 4.11 2.24-3.71 2.03-3.1 6.9.65 7.92z" />
    </svg>
  );
}

/* ============================================================
   3) NAVBAR + HERO (bosh sahifa)
   ============================================================ */
function useGoogleFont() {
  useEffect(() => {
    const id = "luxora-playfair-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap";
    document.head.appendChild(link);
  }, []);
}

const navLinks = ["Home", "Shop", "Categories", "Blog", "About"];

/* ============================================================
   NAVBAR — barcha sahifalarda ko'rinadi, Home/Shop/Categories
   orasida almashtiradi (activePage + onNavigate orqali)
   ============================================================ */
function Navbar({ onOpenLogin, activePage, onNavigate, onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalCount, openCart } = useCart();
  const { totalCount: wishlistCount, openWishlist } = useWishlist();

  function handleNavClick(item) {
    onNavigate(item.toLowerCase());
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          >
            <ShoppingBag className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 text-lg">Luxora</span>
        </div>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={
                activePage === item.toLowerCase()
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-gray-900 transition-colors"
              }
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center flex-1 max-w-xs">
          <div className="relative w-full cursor-pointer" onClick={onOpenSearch}>
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <div
              className="w-full bg-gray-100 rounded-full pl-9 pr-4 py-2 text-sm text-gray-400 select-none"
            >
              Search products...
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            onClick={openWishlist}
            className="relative inline-flex text-gray-500 hover:text-gray-800"
            aria-label="Sevimlilarni ochish"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount > 9 ? "9+" : wishlistCount}
              </span>
            )}
          </button>
          <button
            onClick={openCart}
            className="relative text-gray-500 hover:text-gray-800"
            aria-label="Savatni ochish"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center">
                {totalCount > 9 ? "9+" : totalCount}
              </span>
            )}
          </button>
          <button
            onClick={onOpenLogin}
            className="hidden sm:inline-flex text-gray-500 hover:text-gray-800"
            aria-label="Kirish"
          >
            <User className="w-5 h-5" />
          </button>
          <button className="hidden sm:inline-flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold rounded-full px-3.5 py-2 hover:bg-black transition">
            <LayoutGrid className="w-3.5 h-3.5" />
            Admin
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-gray-700"
            aria-label="Menyuni ochish"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4">
          <div className="relative" onClick={() => { setMobileOpen(false); onOpenSearch(); }}>
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <div className="w-full bg-gray-100 rounded-full pl-9 pr-4 py-2 text-sm text-gray-400">
              Search products...
            </div>
          </div>
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={
                  activePage === item.toLowerCase()
                    ? "text-indigo-600 text-left"
                    : "text-gray-700 text-left"
                }
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <button onClick={() => { setMobileOpen(false); openWishlist(); }} aria-label="Sevimlilar">
              <Heart className="w-5 h-5 text-gray-500" />
            </button>
            <button onClick={() => { setMobileOpen(false); onOpenLogin(); }} aria-label="Kirish">
              <User className="w-5 h-5 text-gray-500" />
            </button>
            <button className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-semibold rounded-full px-3.5 py-2">
              <LayoutGrid className="w-3.5 h-3.5" />
              Admin
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function LuxoraHome() {
  useGoogleFont();

  return (
    <div className="min-h-screen w-full">
      {/* HERO */}
      <section
        className="relative overflow-x-clip"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #3b2f66 0%, transparent 45%), radial-gradient(circle at 85% 80%, #2b3d7a 0%, transparent 50%), linear-gradient(135deg, #14132b 0%, #1b1f3a 50%, #23285c 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-slate-200 text-xs font-medium px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              New Season Collection is Live
            </div>

            <h1
              className="text-white font-bold text-4xl sm:text-5xl xl:text-6xl leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Shop the World's
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #818cf8 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Finest Luxury
              </span>
              <br />
              Goods Online
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-md mb-8">
              Curated premium products from the world's most iconic brands.
              Authenticity guaranteed, elegance delivered.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                className="inline-flex items-center gap-2 text-white text-sm font-semibold rounded-xl px-6 py-3 shadow-lg hover:opacity-90 transition"
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                }}
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 text-white text-sm font-semibold rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3 transition">
                <Play className="w-3.5 h-3.5 fill-white" />
                Watch Story
              </button>
            </div>

            <div className="h-px w-full max-w-md bg-white/10 mb-8" />

            <div className="flex items-center gap-8 sm:gap-10">
              <Stat value="50K+" label="Happy Clients" />
              <Stat value="120+" label="Luxury Brands" />
              <Stat value="4.9★" label="App Rating" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md px-6 pt-6 pb-8">
            <div className="absolute top-0 left-0 z-20 bg-orange-500 text-white text-[11px] sm:text-xs font-semibold rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
              -40% Today Only
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] mt-6">
              <ShopIllustration />
            </div>

            <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-xl p-3 w-32 sm:w-40 z-20">
              <div className="w-full aspect-square rounded-xl mb-2 flex items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500">
                <Headphones className="w-8 h-8 text-gray-900" />
              </div>
              <p className="text-gray-900 text-xs font-semibold leading-tight">
                AirPods Pro Max
              </p>
              <p className="text-indigo-600 text-sm font-bold">$549</p>
            </div>

            <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl p-3 w-48 sm:w-56 z-20">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-gray-900 text-xs font-semibold leading-tight">
                    Order Delivered
                  </p>
                  <p className="text-gray-400 text-[11px]">2 mins ago</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-[11px]">
                      Excellent quality!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p
        className="text-white font-bold text-xl sm:text-2xl"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {value}
      </p>
      <p className="text-slate-400 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

function ShopIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b2f45" />
          <stop offset="100%" stopColor="#1a1d2e" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#fff7e0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff7e0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#wall)" />
      {[70, 150, 230, 310].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="0" x2={x} y2="40" stroke="#555" strokeWidth="2" />
          <ellipse cx={x} cy="46" rx="14" ry="8" fill="#e8e2d0" />
          <circle cx={x} cy="60" r="40" fill="url(#glow)" />
        </g>
      ))}
      <rect x="20" y="120" width="150" height="8" fill="#3a3f57" />
      <rect x="20" y="170" width="150" height="8" fill="#3a3f57" />
      <rect x="20" y="220" width="150" height="8" fill="#3a3f57" />
      {[30, 70, 110].map((x, i) => (
        <rect
          key={i}
          x={x}
          y={100}
          width="34"
          height="18"
          rx="3"
          fill={["#8b93c4", "#c9d3e8", "#5c6693"][i % 3]}
        />
      ))}
      {[30, 70, 110].map((x, i) => (
        <rect
          key={"b" + i}
          x={x}
          y={150}
          width="34"
          height="18"
          rx="3"
          fill={["#c9d3e8", "#5c6693", "#8b93c4"][i % 3]}
        />
      ))}
      <line x1="220" y1="90" x2="380" y2="90" stroke="#555" strokeWidth="2" />
      {[240, 270, 300, 330, 360].map((x, i) => (
        <path
          key={i}
          d={`M${x} 90 L${x} 100 L${x - 12} 150 L${x + 12} 150 Z`}
          fill={["#9aa3d1", "#4b5480", "#c3ccec", "#6b74a6", "#e2e6f5"][i]}
          opacity="0.9"
        />
      ))}
      <rect x="0" y="260" width="400" height="40" fill="#12141f" />
    </svg>
  );
}

/* ============================================================
   4) ISHONCH CHIZIG'I + FEATURED CATEGORIES
   ============================================================ */
const trustItems = [
  { icon: Truck, title: "Free Shipping", subtitle: "On orders over $100" },
  { icon: ShieldCheck, title: "Authenticity", subtitle: "100% genuine products" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "30-day return policy" },
  { icon: Award, title: "Premium Support", subtitle: "24/7 expert assistance" },
];

const categories = [
  {
    icon: Laptop,
    title: "Electronics",
    items: "1,240 items",
    from: "#dbeafe",
    to: "#eff6ff",
    accent: "text-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shirt,
    title: "Fashion",
    items: "892 items",
    from: "#ede9fe",
    to: "#f5f3ff",
    accent: "text-violet-600",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Footprints,
    title: "Shoes",
    items: "634 items",
    from: "#fed7aa",
    to: "#ffedd5",
    accent: "text-orange-600",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Watch,
    title: "Watches",
    items: "418 items",
    from: "#fecdd3",
    to: "#ffe4e6",
    accent: "text-rose-600",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: ShoppingBag,
    title: "Bags",
    items: "527 items",
    from: "#bbf7d0",
    to: "#dcfce7",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: Sparkles,
    title: "Beauty",
    items: "743 items",
    from: "#fbcfe8",
    to: "#fce7f3",
    accent: "text-pink-600",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: Camera,
    title: "Cameras",
    items: "213 items",
    from: "#e2e8f0",
    to: "#f1f5f9",
    accent: "text-slate-600",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-700",
  },
  {
    icon: Dumbbell,
    title: "Sports",
    items: "356 items",
    from: "#bbf7d0",
    to: "#ecfdf5",
    accent: "text-green-600",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
];

function LuxoraCategories() {
  return (
    <div className="w-full">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
            {trustItems.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-blue-600" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-900 text-sm font-semibold truncate">
                    {title}
                  </p>
                  <p className="text-gray-500 text-xs truncate">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-indigo-600 text-xs font-bold tracking-widest mb-2">
                EXPLORE
              </p>
              <h2
                className="text-gray-900 text-3xl sm:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Featured Categories
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:text-indigo-700 shrink-0"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>

          <a
            href="#"
            className="sm:hidden flex items-center justify-center gap-1 text-indigo-600 text-sm font-semibold mt-6"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ icon: Icon, title, items, from, to, accent, iconBg, iconColor }) {
  return (
    <a
      href="#"
      className="group relative rounded-2xl p-5 h-32 sm:h-36 overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-0.5"
      style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
    >
      <div
        className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-40 blur-md"
        style={{ background: from }}
      />
      <div className={`relative w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center`}>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} strokeWidth={2} />
      </div>
      <div className="relative flex items-end justify-between">
        <div>
          <p className="text-gray-900 font-bold text-sm sm:text-base leading-tight">
            {title}
          </p>
          <p className="text-gray-600 text-xs">{items}</p>
        </div>
        <ChevronRight className={`w-4 h-4 ${accent} transition-transform group-hover:translate-x-0.5`} />
      </div>
    </a>
  );
}

/* ============================================================
   5) FLASH SALE
   ============================================================ */
const flashProducts = [
  {
    id: "apple-airpods-pro-max",
    brand: "Apple",
    name: "AirPods Pro Max",
    price: 549,
    oldPrice: 649,
    discount: "-15%",
    bg: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    icon: Headphones,
    iconColor: "text-gray-900",
  },
  {
    id: "nike-air-max-270",
    brand: "Nike",
    name: "Nike Air Max 270",
    price: 189,
    oldPrice: 249,
    discount: "-24%",
    bg: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    icon: Footprints,
    iconColor: "text-white",
  },
  {
    id: "rolex-luxury-gold-watch",
    brand: "Rolex",
    name: "Luxury Gold Watch",
    price: 8950,
    oldPrice: 9500,
    discount: "-6%",
    bg: "linear-gradient(135deg, #e5e7eb 0%, #cbd5e1 100%)",
    icon: Watch,
    iconColor: "text-gray-800",
  },
  {
    id: "gucci-leather-tote-bag",
    brand: "Gucci",
    name: "Leather Tote Bag",
    price: 1290,
    oldPrice: 1590,
    discount: "-19%",
    bg: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)",
    icon: ShoppingBag,
    iconColor: "text-amber-300",
  },
];

function useCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hrs = Math.floor(secondsLeft / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;
  const pad = (n) => String(n).padStart(2, "0");

  return { hrs: pad(hrs), mins: pad(mins), secs: pad(secs) };
}

function LuxoraFlashSale() {
  const { hrs, mins, secs } = useCountdown(5 * 3600 + 40 * 60 + 31);

  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(circle at 10% 10%, #2a2f5c 0%, transparent 45%), linear-gradient(135deg, #14132b 0%, #1b1f3a 50%, #1e2350 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-bold tracking-widest mb-2">
              <Zap className="w-3.5 h-3.5 fill-orange-400" />
              LIMITED TIME
            </div>
            <h2
              className="text-white text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Flash Sale
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm hidden sm:inline">Ends in:</span>
            <TimeBox value={hrs} label="HRS" />
            <span className="text-slate-500 font-bold pb-4">:</span>
            <TimeBox value={mins} label="MIN" />
            <span className="text-slate-500 font-bold pb-4">:</span>
            <TimeBox value={secs} label="SEC" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {flashProducts.map((p) => (
            <FlashProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-700/70 border border-white/10 rounded-lg px-3 py-2 min-w-[52px] text-center">
        <span className="text-white font-bold text-lg tabular-nums">{value}</span>
      </div>
      <span className="text-slate-500 text-[10px] mt-1 tracking-wide">{label}</span>
    </div>
  );
}

function FlashProductCard({ id, brand, name, price, oldPrice, discount, bg, icon: Icon, iconColor }) {
  const { addItem } = useCart();

  function handleAdd() {
    addItem({ id, name, brand, price, icon: Icon, iconBg: bg });
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-slate-800/60 border border-white/5 flex flex-col">
      <div className="relative aspect-square flex items-center justify-center" style={{ background: bg }}>
        <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[11px] font-bold rounded-full px-2.5 py-1">
          {discount}
        </span>
        <Icon className={`w-16 h-16 sm:w-20 sm:h-20 ${iconColor}`} strokeWidth={1.5} />
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-1 flex-1">
        <span className="text-indigo-400 text-xs font-medium">{brand}</span>
        <p className="text-white text-sm font-semibold leading-snug line-clamp-2">{name}</p>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-white font-bold text-sm sm:text-base">
              ${price.toLocaleString()}
            </span>
            <span className="text-slate-500 text-xs line-through">
              ${oldPrice.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="w-7 h-7 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center transition sm:hidden"
            aria-label={`${name}ni savatga qo'shish`}
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleAdd}
            className="hidden sm:inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full px-3.5 py-1.5 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   6) BEST SELLERS
   ============================================================ */
const bestSellers = [
  {
    id: "sony-wh1000xm5",
    brand: "SONY",
    category: "Electronics",
    name: "Sony WH-1000XM5",
    rating: 5,
    reviews: 5621,
    price: 349,
    oldPrice: 399,
    discount: "-13%",
    bg: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
    icon: Headphones,
    iconColor: "text-gray-800",
    defaultLiked: true,
  },
  {
    id: "canon-eos-r5",
    brand: "CANON",
    category: "Cameras",
    name: "Canon EOS R5",
    rating: 5,
    reviews: 784,
    price: 3899,
    oldPrice: 4299,
    discount: "-9%",
    bg: "linear-gradient(135deg, #27272a 0%, #09090b 100%)",
    icon: Camera,
    iconColor: "text-white",
  },
  {
    id: "apple-macbook-pro-16",
    brand: "APPLE",
    category: "Electronics",
    name: "MacBook Pro 16''",
    rating: 5,
    reviews: 6234,
    price: 2499,
    oldPrice: 2799,
    discount: "-11%",
    bg: "linear-gradient(135deg, #e7ded1 0%, #cbbfa9 100%)",
    icon: Laptop,
    iconColor: "text-gray-900",
  },
  {
    id: "burberry-trench-coat",
    brand: "BURBERRY",
    category: "Fashion",
    name: "Burberry Trench Coat",
    rating: 5,
    reviews: 341,
    price: 1890,
    oldPrice: 2100,
    discount: "-10%",
    bg: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)",
    icon: Shirt,
    iconColor: "text-amber-100",
  },
];

function LuxoraBestSellers() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-indigo-600 text-xs font-bold tracking-widest mb-2">
              TOP PICKS
            </p>
            <h2
              className="text-gray-900 text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Best Sellers
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:text-indigo-700"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {bestSellers.map((p) => (
            <BestSellerCard key={p.id} product={p} onQuickView={() => setQuickViewProduct(p)} />
          ))}
        </div>
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
}

function BestSellerCard({ product, onQuickView }) {
  const { addItem } = useCart();
  const [liked, setLiked] = useState(!!product.defaultLiked);
  const Icon = product.icon;

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      icon: product.icon,
      iconBg: product.bg,
    });
  }

  return (
    <div className="group rounded-2xl border border-gray-100 overflow-hidden bg-white hover:shadow-xl transition-shadow flex flex-col">
      <div className="relative aspect-[4/5] flex items-center justify-center" style={{ background: product.bg }}>
        <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[11px] font-bold rounded-full px-2.5 py-1 z-10">
          {product.discount}
        </span>

        <button
          onClick={() => setLiked((v) => !v)}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors z-10 ${
            liked ? "bg-red-500" : "bg-white/90 hover:bg-white"
          }`}
          aria-label="Sevimlilarga qo'shish"
        >
          <Heart className={`w-4 h-4 ${liked ? "text-white fill-white" : "text-gray-500"}`} />
        </button>

        <Icon className={`w-16 h-16 sm:w-20 sm:h-20 ${product.iconColor}`} strokeWidth={1.5} />

        <button
          onClick={onQuickView}
          className="absolute inset-x-0 bottom-3 mx-auto w-max flex items-center gap-1.5 bg-white text-gray-900 text-xs font-semibold rounded-full px-4 py-2 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-10"
        >
          <Eye className="w-3.5 h-3.5" />
          Quick View
        </button>
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-indigo-600 text-xs font-semibold">{product.brand}</span>
          <span className="text-gray-400 text-[11px]">{product.category}</span>
        </div>

        <p className="text-gray-900 text-sm font-semibold leading-snug">{product.name}</p>

        <div className="flex items-center gap-1">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < product.rating ? "fill-amber-400" : "fill-none text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-xs">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-gray-900 font-bold text-sm sm:text-base">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-xs line-through">
              ${product.oldPrice.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full px-3.5 py-1.5 transition"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickViewModal({ product, onClose }) {
  const { addItem } = useCart();
  const Icon = product.icon;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden grid sm:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-500 hover:text-gray-800"
          aria-label="Yopish"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="aspect-square sm:aspect-auto flex items-center justify-center" style={{ background: product.bg }}>
          <Icon className={`w-20 h-20 ${product.iconColor}`} strokeWidth={1.5} />
        </div>

        <div className="p-5 flex flex-col">
          <span className="text-indigo-600 text-xs font-semibold">{product.brand}</span>
          <h3 className="text-gray-900 text-lg font-bold mt-1">{product.name}</h3>

          <div className="flex items-center gap-1 mt-2">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-400 text-xs">({product.reviews.toLocaleString()} sharh)</span>
          </div>

          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-gray-900 font-bold text-xl">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-gray-400 text-sm line-through">
              ${product.oldPrice.toLocaleString()}
            </span>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            {product.category} bo'limidan tanlangan mashhur mahsulot. Bir zumda savatga qo'shing.
          </p>

          <button
            onClick={() => {
              addItem({
                id: product.id,
                name: product.name,
                brand: product.brand,
                price: product.price,
                icon: product.icon,
                iconBg: product.bg,
              });
              onClose();
            }}
            className="mt-auto pt-5 w-full flex items-center justify-center gap-2 text-white text-sm font-semibold rounded-xl py-3 shadow-lg hover:opacity-90 transition"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   6.5) NEW ARRIVALS (Best Sellers bilan bir xil kartochka uslubi)
   ============================================================ */
const newArrivals = [
  {
    id: "apple-airpods-pro-max",
    brand: "APPLE",
    category: "Electronics",
    name: "AirPods Pro Max",
    rating: 5,
    reviews: 3847,
    price: 549,
    oldPrice: 649,
    discount: "-15%",
    bg: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    icon: Headphones,
    iconColor: "text-gray-900",
  },
  {
    id: "nike-air-max-270",
    brand: "NIKE",
    category: "Shoes",
    name: "Nike Air Max 270",
    rating: 5,
    reviews: 2847,
    price: 189,
    oldPrice: 249,
    discount: "-24%",
    bg: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    icon: Footprints,
    iconColor: "text-white",
  },
  {
    id: "rolex-luxury-gold-watch",
    brand: "ROLEX",
    category: "Watches",
    name: "Luxury Gold Watch",
    rating: 5,
    reviews: 1203,
    price: 8950,
    oldPrice: 9500,
    discount: "-6%",
    bg: "linear-gradient(135deg, #e5e7eb 0%, #cbd5e1 100%)",
    icon: Watch,
    iconColor: "text-gray-800",
    defaultLiked: true,
  },
  {
    id: "gucci-leather-tote-bag",
    brand: "GUCCI",
    category: "Bags",
    name: "Leather Tote Bag",
    rating: 5,
    reviews: 892,
    price: 1290,
    oldPrice: 1590,
    discount: "-19%",
    bg: "linear-gradient(135deg, #3f3f46 0%, #18181b 100%)",
    icon: ShoppingBag,
    iconColor: "text-amber-300",
  },
];

function LuxoraNewArrivals() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-violet-600 text-xs font-bold tracking-widest mb-2">
              FRESH IN
            </p>
            <h2
              className="text-gray-900 text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-violet-600 text-sm font-semibold hover:text-violet-700"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {newArrivals.map((p) => (
            <BestSellerCard key={p.id} product={p} onQuickView={() => setQuickViewProduct(p)} />
          ))}
        </div>

        <a
          href="#"
          className="sm:hidden flex items-center justify-center gap-1 text-violet-600 text-sm font-semibold mt-6"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {quickViewProduct && (
        <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </section>
  );
}

/* ============================================================
   6.7) POPULAR BRANDS
   ============================================================ */
const brands = [
  { name: "Apple", tagline: "Think Different" },
  { name: "Nike", tagline: "Just Do It" },
  { name: "Gucci", tagline: "Italian Luxury" },
  { name: "Rolex", tagline: "Swiss Precision" },
  { name: "Sony", tagline: "Be Moved" },
  { name: "Samsung", tagline: "Do What You Can't" },
  { name: "Adidas", tagline: "Impossible Is Nothing" },
  { name: "Burberry", tagline: "British Heritage" },
];

function LuxoraBrands() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-indigo-600 text-xs font-bold tracking-widest mb-2">
            OUR PARTNERS
          </p>
          <h2
            className="text-gray-900 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Popular Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {brands.map((b) => (
            <BrandCard key={b.name} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ name, tagline }) {
  return (
    <div className="group relative">
      {/* pastdagi yumshoq ko'k porlash (glow) — rasmdagi Apple kartasidagi kabi */}
      <div className="absolute inset-x-5 -bottom-3 h-8 rounded-full bg-indigo-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

      <button
        type="button"
        className="relative w-full border-2 border-gray-200 group-hover:border-indigo-400 bg-white rounded-xl py-6 px-4 text-center transition-colors duration-200"
      >
        <p
          className="font-bold text-lg sm:text-xl text-gray-300 group-hover:text-indigo-600 transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {name}
        </p>
        <p className="text-gray-300 group-hover:text-gray-500 text-xs mt-1 transition-colors duration-200">
          {tagline}
        </p>
      </button>
    </div>
  );
}

/* ============================================================
   6.8) PROMO BANNER (30% chegirma)
   ============================================================ */
function LuxoraPromoBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div
          className="relative overflow-hidden rounded-2xl px-6 sm:px-10 py-10 sm:py-14"
          style={{
            background: "linear-gradient(120deg, #f97316 0%, #ea580c 55%, #e11d48 100%)",
          }}
        >
          {/* orqa fondagi katta xira "30%" matni */}
          <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-right pointer-events-none select-none hidden sm:block">
            <p
              className="font-bold text-white/15 text-7xl sm:text-8xl leading-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              30%
            </p>
            <p className="text-white/20 font-bold text-xl -mt-2">OFF</p>
          </div>

          <div className="relative max-w-md">
            <p className="text-white/90 text-xs font-bold tracking-widest mb-3">
              SPECIAL OFFER
            </p>
            <h2
              className="text-white text-2xl sm:text-3xl font-bold leading-snug mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get 30% Off Your First Premium Order
            </h2>
            <p className="text-white/85 text-sm mb-6">
              Exclusive discount for new members. Limited time offer.
            </p>
            <button
              onClick={() => alert("Demo: 30% chegirma kodi qo'llandi!")}
              className="bg-white text-orange-600 text-sm font-bold rounded-full px-6 py-3 shadow-lg hover:bg-orange-50 transition"
            >
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6.9) MIJOZLAR FIKRI (Testimonials)
   ============================================================ */
const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Fashion Designer",
    initials: "SM",
    avatarBg: "linear-gradient(135deg, #f472b6 0%, #be185d 100%)",
    quote:
      "Absolutely premium experience! The quality of products and the seamless shopping experience is unmatched. Every item arrived perfectly packaged.",
  },
  {
    name: "James Chen",
    role: "Tech Entrepreneur",
    initials: "JC",
    avatarBg: "linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)",
    quote:
      "The curated selection of electronics is top-notch. Fast shipping, authentic products, and outstanding customer service. My go-to luxury marketplace.",
  },
  {
    name: "Olivia Reynolds",
    role: "Lifestyle Blogger",
    initials: "OR",
    avatarBg: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
    quote:
      "I've been shopping here for 2 years and the experience just keeps getting better. The attention to detail in every aspect of the platform is remarkable.",
  },
];

function LuxoraTestimonials() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="text-center mb-10">
          <p className="text-indigo-600 text-xs font-bold tracking-widest mb-2">
            REVIEWS
          </p>
          <h2
            className="text-gray-900 text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, initials, avatarBg, quote }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col">
      <div className="flex text-amber-400 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed flex-1">"{quote}"</p>

      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ background: avatarBg }}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-gray-900 text-sm font-semibold truncate">{name}</p>
          <p className="text-gray-400 text-xs truncate">{role}</p>
        </div>
        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
      </div>
    </div>
  );
}

/* ============================================================
   6.95) NEWSLETTER (obuna bo'lish)
   ============================================================ */
function useNewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 3000);
  }

  return { email, setEmail, subscribed, handleSubscribe };
}

function LuxoraNewsletter() {
  const { email, setEmail, subscribed, handleSubscribe } = useNewsletterForm();

  return (
    <section className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
        >
          <Mail className="w-5 h-5 text-white" />
        </div>

        <h2
          className="text-gray-900 text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Stay in the Loop
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Get exclusive offers, early access to sales, and style tips delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-2 bg-gray-50 border border-gray-200 rounded-full p-1.5 sm:p-2 max-w-lg mx-auto"
        >
          <div className="relative flex-1 w-full">
            <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-transparent pl-10 pr-3 py-2.5 text-sm outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto text-white text-sm font-semibold rounded-full px-6 py-2.5 shadow-md hover:opacity-90 transition shrink-0"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)" }}
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-400 text-xs mt-4">
          {subscribed ? (
            <span className="text-emerald-600 font-medium">
              Obuna bo'ldingiz! Rahmat.
            </span>
          ) : (
            "No spam. Unsubscribe anytime. Privacy guaranteed."
          )}
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   6.96) FOOTER
   ============================================================ */
const footerShopLinks = ["New Arrivals", "Best Sellers", "Sale Items", "Gift Cards", "Brands"];
const footerSupportLinks = ["Help Center", "Track Order", "Returns", "Contact Us", "Size Guide"];
const socialIcons = [Facebook, Twitter, Instagram, Youtube, Linkedin];
const paymentBadges = ["VISA", "MC", "PayPal", "Apple Pay"];

function LuxoraFooter() {
  const { email, setEmail, subscribed, handleSubscribe } = useNewsletterForm();

  return (
    <footer className="bg-[#0b0e1a] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" }}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-lg">Luxora</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            The premium marketplace for luxury goods, curated for the discerning customer.
            Authenticity guaranteed on every purchase.
          </p>
          <div className="flex items-center gap-2.5">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
                aria-label="Ijtimoiy tarmoq"
              >
                <Icon className="w-3.5 h-3.5 text-slate-300" />
              </a>
            ))}
          </div>
        </div>

        {/* shop links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2.5 text-sm">
            {footerShopLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* support links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2.5 text-sm">
            {footerSupportLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter mini form */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-slate-400 text-sm mb-4">
            Subscribe for exclusive deals and new arrivals.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-400/50 transition"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg py-2.5 transition"
            >
              Subscribe
            </button>
            {subscribed && (
              <p className="text-emerald-400 text-xs">Obuna bo'ldingiz!</p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Luxora. All rights reserved. Premium marketplace.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Cookie Policy</a>
          </div>
          <div className="flex items-center gap-2">
            {paymentBadges.map((p) => (
              <span
                key={p}
                className="border border-white/10 rounded-md px-2.5 py-1 text-[10px] font-semibold text-slate-400"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   7) SAVAT PANELI (drawer) VA TOAST XABARI
   ============================================================ */
function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, totalCount, clearCart } =
    useCart();

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-lg">
            Savat{totalCount > 0 ? ` (${totalCount})` : ""}
          </h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-gray-700" aria-label="Savatni yopish">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 gap-3">
              <ShoppingBag className="w-10 h-10" />
              <p className="text-sm">Savatingiz hozircha bo'sh</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="flex gap-3">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: item.iconBg || "#f1f5f9" }}
                    >
                      {Icon ? (
                        <Icon className="w-7 h-7 text-gray-800" strokeWidth={1.5} />
                      ) : (
                        <ShoppingBag className="w-6 h-6 text-gray-500" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      {item.brand && (
                        <p className="text-indigo-600 text-[11px] font-semibold">{item.brand}</p>
                      )}
                      <p className="text-gray-900 text-sm font-semibold leading-tight truncate">
                        {item.name}
                      </p>
                      <p className="text-gray-900 text-sm font-bold mt-1">
                        ${item.price.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                          aria-label="Kamaytirish"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-5 text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                          aria-label="Ko'paytirish"
                        >
                          <Plus className="w-3 h-3" />
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-gray-300 hover:text-red-500"
                          aria-label="O'chirish"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Jami:</span>
              <span className="text-gray-900 font-bold text-base">
                ${subtotal.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => alert("Demo: buyurtma qabul qilindi!")}
              className="w-full text-white text-sm font-semibold rounded-xl py-3 shadow-lg hover:opacity-90 transition"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
              }}
            >
              Buyurtma berish
            </button>
            <button onClick={clearCart} className="w-full text-gray-400 hover:text-red-500 text-xs font-medium">
              Savatni tozalash
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function CartToast() {
  const { toast } = useCart();

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[110] transition-all duration-300 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium rounded-full pl-3 pr-4 py-2 shadow-xl">
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        {toast}
      </div>
    </div>
  );
}

/* ============================================================
   8) ASOSIY APP — hammasini birlashtiradi
   ============================================================ */
/* ============================================================
   SEARCH OVERLAY — global qidiruv
   ============================================================ */
function SearchOverlay({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState("");
  const { addItem } = useCart();
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) setQuery("");
  }, [isOpen]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const results = query.trim().length > 0
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[180] flex items-start justify-center pt-20 sm:pt-28 px-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden" style={{ animation: "fadeInUp 0.2s ease-out" }}>
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, categories..."
            className="flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {query.trim().length === 0 ? (
            <div className="px-5 py-8 text-center text-gray-400">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Mahsulot, brend yoki kategoriya qidiring</p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center text-gray-400">
              <p className="text-sm">"<span className="text-gray-600 font-medium">{query}</span>" bo'yicha natija topilmadi</p>
            </div>
          ) : (
            <ul className="py-2">
              {results.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    onClose();
                    onNavigate("shop");
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-indigo-600 font-semibold">{product.brand}</p>
                    <p className="text-gray-900 text-sm font-semibold truncate">{product.name}</p>
                    <p className="text-gray-500 text-xs">{product.category}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-gray-900 font-bold text-sm">${product.price.toLocaleString()}</p>
                    {product.oldPrice && (
                      <p className="text-gray-400 text-xs line-through">${product.oldPrice.toLocaleString()}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
          <span>ESC — yopish</span>
          {results.length > 0 && <span>{results.length} ta natija</span>}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   WISHLIST DRAWER — sevimlilar paneli
   ============================================================ */
function WishlistDrawer() {
  const { items, isOpen, closeWishlist, removeItem, totalCount } = useWishlist();
  const { addItem: addToCart } = useCart();

  return (
    <>
      <div
        onClick={closeWishlist}
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            Sevimlilar{totalCount > 0 ? ` (${totalCount})` : ""}
          </h2>
          <button onClick={closeWishlist} className="text-gray-400 hover:text-gray-700" aria-label="Yopish">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 gap-3">
              <Heart className="w-10 h-10" />
              <p className="text-sm">Sevimlilar ro'yxati bo'sh</p>
              <p className="text-xs">Mahsulotlardagi ♥ tugmasini bosing</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 p-3 rounded-xl border border-gray-100 hover:shadow-md transition">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                    ) : item.icon ? (
                      <item.icon className="w-7 h-7 text-gray-600" strokeWidth={1.5} />
                    ) : (
                      <Heart className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {item.brand && <p className="text-indigo-600 text-[11px] font-semibold">{item.brand}</p>}
                    <p className="text-gray-900 text-sm font-semibold leading-tight truncate">{item.name}</p>
                    <p className="text-gray-900 text-sm font-bold mt-1">${item.price?.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          addToCart({ id: item.id, name: item.name, brand: item.brand, price: item.price, image: item.image, icon: item.icon, iconBg: item.iconBg });
                        }}
                        className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full px-3 py-1.5 transition"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        Savatga
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-500 transition"
                        aria-label="O'chirish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}

function WishlistToast() {
  const { toast } = useWishlist();

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[110] transition-all duration-300 ${
        toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium rounded-full pl-3 pr-4 py-2 shadow-xl">
        <Heart className="w-4 h-4 text-red-400 fill-red-400" />
        {toast}
      </div>
    </div>
  );
}

/* ============================================================
   8) ASOSIY APP — hammasini birlashtiradi
   ============================================================ */
export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // "home" | "shop" | "categories" | "blog" | "about"
  const [page, setPage] = useState("home");
  const [shopCategory, setShopCategory] = useState("All");

  // Categories sahifasida kartochka bosilganda shu funksiya chaqiriladi:
  // tanlangan kategoriyani saqlab, Shop sahifasiga o'tkazadi
  function handleCategorySelect(categoryName) {
    setShopCategory(categoryName);
    setPage("shop");
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <Navbar
          onOpenLogin={() => setShowLogin(true)}
          onOpenSearch={() => setShowSearch(true)}
          activePage={page}
          onNavigate={setPage}
        />

        {page === "home" && (
          <>
            <LuxoraHome />
            <LuxoraCategories />
            <LuxoraFlashSale />
            <LuxoraBestSellers />
            <LuxoraNewArrivals />
            <LuxoraBrands />
            <LuxoraPromoBanner />
            <LuxoraTestimonials />
            <LuxoraNewsletter />
            <LuxoraFooter />
          </>
        )}

        {page === "shop" && <Shop initialCategory={shopCategory} />}

        {page === "categories" && (
          <CategoriesPage onCategorySelect={handleCategorySelect} />
        )}

        {page === "blog" && (
          <>
            <BlogPage />
            <LuxoraNewsletter />
            <LuxoraFooter />
          </>
        )}

        {page === "about" && (
          <>
            <AboutPage />
            <LuxoraNewsletter />
            <LuxoraFooter />
          </>
        )}

        <CartDrawer />
        <CartToast />
        <WishlistDrawer />
        <WishlistToast />
        <SearchOverlay isOpen={showSearch} onClose={() => setShowSearch(false)} onNavigate={setPage} />

        {showLogin && <LuxoraLogin onClose={() => setShowLogin(false)} />}
      </WishlistProvider>
    </CartProvider>
  );
}
