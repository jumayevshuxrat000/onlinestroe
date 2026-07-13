import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ChevronRight,
  Search,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Tag,
  Bookmark,
  Share2,
  Watch,
  Shirt,
  Laptop,
  Footprints,
  Sparkles,
  Heart,
  Camera,
} from "lucide-react";
import { blogPosts, blogCategories } from "../data/blogData";

/* ============================================================
   BLOG IMAGE ILLUSTRATIONS — xar xil blog post uchun SVG rasm
   ============================================================ */
function BlogImageIllustration({ type, className = "" }) {
  const illustrations = {
    watch: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="watchBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <radialGradient id="watchFace" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill="url(#watchBg)" rx="0" />
        {/* Watch band top */}
        <rect x="170" y="20" width="60" height="60" rx="8" fill="#94a3b8" />
        <rect x="175" y="25" width="50" height="50" rx="6" fill="#64748b" />
        {/* Watch face */}
        <circle cx="200" cy="130" r="65" fill="#1e293b" />
        <circle cx="200" cy="130" r="58" fill="url(#watchFace)" />
        <circle cx="200" cy="130" r="55" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        {/* Hour markers */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 200 + 48 * Math.sin(rad);
          const y1 = 130 - 48 * Math.cos(rad);
          const x2 = 200 + 52 * Math.sin(rad);
          const y2 = 130 - 52 * Math.cos(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#334155"
              strokeWidth={i % 3 === 0 ? "2.5" : "1"}
            />
          );
        })}
        {/* Hour hand */}
        <line x1="200" y1="130" x2="200" y2="95" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
        {/* Minute hand */}
        <line x1="200" y1="130" x2="225" y2="110" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
        {/* Center dot */}
        <circle cx="200" cy="130" r="3" fill="#6366f1" />
        {/* Brand text */}
        <text x="200" y="150" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="600">
          LUXORA
        </text>
        {/* Watch band bottom */}
        <rect x="170" y="200" width="60" height="50" rx="8" fill="#94a3b8" />
        <rect x="175" y="205" width="50" height="40" rx="6" fill="#64748b" />
      </svg>
    ),
    fashion: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="fashionBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fce7f3" />
            <stop offset="100%" stopColor="#fdf2f8" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#fashionBg)" />
        {/* Mannequin / dress form */}
        <ellipse cx="200" cy="55" rx="20" ry="22" fill="#f9a8d4" />
        <path d="M180 75 L160 160 L240 160 L220 75 Z" fill="#ec4899" opacity="0.9" />
        <path d="M160 160 L155 220 L180 220 L175 160 Z" fill="#be185d" opacity="0.8" />
        <path d="M240 160 L245 220 L220 220 L225 160 Z" fill="#be185d" opacity="0.8" />
        {/* Belt */}
        <rect x="162" y="120" width="76" height="6" rx="3" fill="#fbbf24" />
        {/* Accessories */}
        <circle cx="120" cy="100" r="15" fill="none" stroke="#f9a8d4" strokeWidth="3" />
        <circle cx="120" cy="100" r="8" fill="none" stroke="#ec4899" strokeWidth="2" />
        <circle cx="280" cy="120" r="18" fill="none" stroke="#f9a8d4" strokeWidth="3" />
        <rect x="270" y="150" width="20" height="35" rx="4" fill="#ec4899" opacity="0.6" />
        {/* Stars/sparkles */}
        <circle cx="140" cy="50" r="2" fill="#fbbf24" />
        <circle cx="260" cy="60" r="2.5" fill="#fbbf24" />
        <circle cx="300" cy="90" r="1.5" fill="#fbbf24" />
        <circle cx="100" cy="150" r="2" fill="#f472b6" />
      </svg>
    ),
    electronics: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="elecBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#elecBg)" />
        {/* Laptop */}
        <rect x="90" y="60" width="220" height="140" rx="8" fill="#334155" />
        <rect x="98" y="68" width="204" height="124" rx="4" fill="#0f172a" />
        {/* Screen content */}
        <rect x="110" y="80" width="80" height="6" rx="3" fill="#6366f1" opacity="0.7" />
        <rect x="110" y="92" width="120" height="4" rx="2" fill="#475569" />
        <rect x="110" y="100" width="100" height="4" rx="2" fill="#475569" opacity="0.6" />
        <rect x="110" y="115" width="60" height="30" rx="4" fill="#6366f1" opacity="0.2" />
        <rect x="180" y="115" width="60" height="30" rx="4" fill="#8b5cf6" opacity="0.2" />
        <rect x="110" y="155" width="170" height="25" rx="4" fill="#1e293b" />
        {/* Laptop base */}
        <path d="M70 200 L90 200 L310 200 L330 200 L340 215 L60 215 Z" fill="#475569" />
        <rect x="175" y="202" width="50" height="4" rx="2" fill="#64748b" />
        {/* Keyboard light reflection */}
        <rect x="150" y="204" width="100" height="1" rx="0.5" fill="#6366f1" opacity="0.3" />
      </svg>
    ),
    shoes: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="shoesBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef2f2" />
            <stop offset="100%" stopColor="#fee2e2" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#shoesBg)" />
        {/* Sneaker shape */}
        <path
          d="M80 170 Q80 130 120 120 L180 110 Q220 105 250 110 L300 130 Q340 145 340 170 L340 190 Q340 200 330 200 L90 200 Q80 200 80 190 Z"
          fill="#ef4444"
        />
        {/* Sole */}
        <path
          d="M75 195 Q75 190 85 190 L335 190 Q345 190 345 195 L345 210 Q345 215 340 215 L80 215 Q75 215 75 210 Z"
          fill="#1e293b"
        />
        {/* Swoosh / design element */}
        <path
          d="M130 160 Q180 140 240 155 Q280 163 300 170"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Lace area */}
        <ellipse cx="140" cy="130" rx="30" ry="20" fill="#dc2626" opacity="0.8" />
        {/* Laces */}
        <line x1="125" y1="125" x2="155" y2="120" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
        <line x1="125" y1="132" x2="155" y2="127" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
        <line x1="125" y1="139" x2="155" y2="134" stroke="#fff" strokeWidth="1.5" opacity="0.7" />
        {/* Nike-like brand dot */}
        <circle cx="290" cy="155" r="5" fill="#ffffff" opacity="0.4" />
      </svg>
    ),
    sustainable: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="sustainBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="100%" stopColor="#d1fae5" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#sustainBg)" />
        {/* Leaf */}
        <path
          d="M200 50 Q260 80 260 140 Q260 200 200 220 Q140 200 140 140 Q140 80 200 50 Z"
          fill="#10b981"
          opacity="0.2"
        />
        <path
          d="M200 70 Q240 95 240 140 Q240 185 200 200 Q160 185 160 140 Q160 95 200 70 Z"
          fill="#10b981"
          opacity="0.3"
        />
        {/* Leaf vein */}
        <line x1="200" y1="80" x2="200" y2="200" stroke="#059669" strokeWidth="2" opacity="0.5" />
        <line x1="200" y1="110" x2="170" y2="130" stroke="#059669" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="130" x2="230" y2="150" stroke="#059669" strokeWidth="1.5" opacity="0.4" />
        <line x1="200" y1="150" x2="175" y2="170" stroke="#059669" strokeWidth="1.5" opacity="0.4" />
        {/* Recycle symbol */}
        <circle cx="200" cy="140" r="25" fill="none" stroke="#059669" strokeWidth="2" opacity="0.6" />
        <text x="200" y="146" textAnchor="middle" fill="#059669" fontSize="18" fontWeight="bold" opacity="0.7">
          ♻
        </text>
      </svg>
    ),
    beauty: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="beautyBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdf4ff" />
            <stop offset="100%" stopColor="#fae8ff" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#beautyBg)" />
        {/* Bottle */}
        <rect x="175" y="30" width="50" height="15" rx="4" fill="#c084fc" />
        <rect x="180" y="45" width="40" height="150" rx="6" fill="#a855f7" />
        <rect x="183" y="50" width="34" height="60" rx="4" fill="#c084fc" opacity="0.4" />
        {/* Label */}
        <rect x="183" y="120" width="34" height="30" rx="3" fill="#ffffff" opacity="0.8" />
        <rect x="188" y="126" width="24" height="3" rx="1.5" fill="#a855f7" opacity="0.6" />
        <rect x="190" y="132" width="20" height="2" rx="1" fill="#d8b4fe" opacity="0.5" />
        {/* Droplets */}
        <circle cx="140" cy="80" r="8" fill="#e9d5ff" opacity="0.6" />
        <circle cx="260" cy="100" r="10" fill="#e9d5ff" opacity="0.5" />
        <circle cx="130" cy="160" r="6" fill="#f0abfc" opacity="0.4" />
        <circle cx="270" cy="70" r="5" fill="#f0abfc" opacity="0.3" />
        {/* Sparkles */}
        <circle cx="150" cy="120" r="2" fill="#fbbf24" />
        <circle cx="250" cy="140" r="2.5" fill="#fbbf24" />
        <circle cx="280" cy="170" r="1.5" fill="#fbbf24" />
      </svg>
    ),
    smarthome: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="smartBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ede9fe" />
            <stop offset="100%" stopColor="#ddd6fe" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#smartBg)" />
        {/* House outline */}
        <path d="M200 40 L120 100 L120 200 L280 200 L280 100 Z" fill="#8b5cf6" opacity="0.15" />
        <path d="M200 40 L120 100 L280 100 Z" fill="#8b5cf6" opacity="0.25" />
        {/* Door */}
        <rect x="180" y="140" width="40" height="60" rx="4" fill="#7c3aed" opacity="0.3" />
        <circle cx="212" cy="170" r="3" fill="#a78bfa" />
        {/* Window */}
        <rect x="135" y="115" width="30" height="25" rx="3" fill="#c4b5fd" opacity="0.5" />
        <line x1="150" y1="115" x2="150" y2="140" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
        <line x1="135" y1="127" x2="165" y2="127" stroke="#8b5cf6" strokeWidth="1" opacity="0.3" />
        {/* WiFi signals */}
        <path d="M200 70 Q190 80 200 90" fill="none" stroke="#6d28d9" strokeWidth="2" opacity="0.4" />
        <path d="M200 60 Q185 75 200 90" fill="none" stroke="#6d28d9" strokeWidth="2" opacity="0.3" />
        <path d="M200 50 Q180 70 200 90" fill="none" stroke="#6d28d9" strokeWidth="2" opacity="0.2" />
        <circle cx="200" cy="90" r="3" fill="#6d28d9" opacity="0.5" />
      </svg>
    ),
    watchinvest: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="investBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#investBg)" />
        {/* Chart */}
        <line x1="80" y1="200" x2="80" y2="60" stroke="#92400e" strokeWidth="2" opacity="0.3" />
        <line x1="80" y1="200" x2="320" y2="200" stroke="#92400e" strokeWidth="2" opacity="0.3" />
        {/* Bars */}
        {[100, 140, 180, 220, 260, 300].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={200 - [60, 80, 70, 100, 90, 130][i]}
            width="25"
            height={[60, 80, 70, 100, 90, 130][i]}
            rx="4"
            fill="#f59e0b"
            opacity={0.4 + i * 0.1}
          />
        ))}
        {/* Trend line */}
        <polyline
          points="112,155 152,130 192,140 232,110 272,120 312,80"
          fill="none"
          stroke="#d97706"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="312" cy="80" r="4" fill="#d97706" />
        {/* Watch icon small */}
        <circle cx="312" cy="55" r="12" fill="#92400e" opacity="0.2" />
        <circle cx="312" cy="55" r="8" fill="none" stroke="#92400e" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    minimalist: (
      <svg viewBox="0 0 400 260" className={`w-full h-full ${className}`}>
        <defs>
          <linearGradient id="miniBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#miniBg)" />
        {/* Minimal shapes */}
        <circle cx="200" cy="130" r="60" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="200" cy="130" r="40" fill="none" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="200" cy="130" r="20" fill="#64748b" opacity="0.15" />
        <line x1="130" y1="130" x2="270" y2="130" stroke="#94a3b8" strokeWidth="0.5" />
        <line x1="200" y1="60" x2="200" y2="200" stroke="#94a3b8" strokeWidth="0.5" />
      </svg>
    ),
  };

  return illustrations[type] || illustrations.watch;
}

/* ============================================================
   CATEGORY ICON MAP
   ============================================================ */
const categoryIcons = {
  Fashion: Shirt,
  Electronics: Laptop,
  Watches: Watch,
  Shoes: Footprints,
  Beauty: Sparkles,
  Lifestyle: Heart,
  All: BookOpen,
};

const categoryColors = {
  Fashion: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" },
  Electronics: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  Watches: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  Shoes: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
  Beauty: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  Lifestyle: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
};

/* ============================================================
   FEATURED POST CARD (hero)
   ============================================================ */
function FeaturedPostCard({ post, onReadMore }) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onReadMore(post)}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-50">
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
            <BlogImageIllustration type={post.image} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                categoryColors[post.category]?.bg || "bg-gray-100"
              } ${categoryColors[post.category]?.text || "text-gray-600"}`}
            >
              {post.category}
            </span>
          </div>

          <h2
            className="text-gray-900 text-xl sm:text-2xl font-bold leading-snug mb-3 group-hover:text-indigo-600 transition-colors"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   REGULAR POST CARD
   ============================================================ */
function BlogPostCard({ post, onReadMore }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
      onClick={() => onReadMore(post)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
          <BlogImageIllustration type={post.image} />
        </div>

        {/* Bookmark button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsBookmarked((v) => !v);
          }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors z-10 ${
            isBookmarked
              ? "bg-indigo-600 text-white"
              : "bg-white/90 hover:bg-white text-gray-500"
          }`}
          aria-label="Bookmark"
        >
          <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-white" : ""}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span
          className={`self-start inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 ${
            categoryColors[post.category]?.bg || "bg-gray-100"
          } ${categoryColors[post.category]?.text || "text-gray-600"}`}
        >
          {post.category}
        </span>

        <h3 className="text-gray-900 text-sm sm:text-base font-bold leading-snug mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-gray-300 hover:text-indigo-500 transition-colors"
            aria-label="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   BLOG POST DETAIL MODAL
   ============================================================ */
function BlogPostModal({ post, onClose }) {
  // ESC tugmasi bilan yopish
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Scroll blokirovkasi
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto py-8 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-500 hover:text-gray-800 shadow-sm transition"
          aria-label="Yopish"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="aspect-[16/9] bg-gray-50">
          <BlogImageIllustration type={post.image} />
        </div>

        {/* Content */}
        <div className="px-6 sm:px-10 py-8">
          {/* Category & meta */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                categoryColors[post.category]?.bg || "bg-gray-100"
              } ${categoryColors[post.category]?.text || "text-gray-600"}`}
            >
              {post.category}
            </span>
            <span className="text-gray-400 text-xs inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-gray-400 text-xs inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: post.author.avatarBg }}
            >
              {post.author.initials}
            </div>
            <div>
              <p className="text-gray-900 text-sm font-semibold">
                {post.author.name}
              </p>
              <p className="text-gray-400 text-xs">Contributing Writer</p>
            </div>
          </div>

          {/* Article body (demo content) */}
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>{post.excerpt}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <h3
              className="text-gray-900 text-lg font-bold mt-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Key Takeaways
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Quality over quantity — invest in timeless pieces that last.
              </li>
              <li>
                Research and authenticity are crucial in luxury markets.
              </li>
              <li>
                Understanding trends helps you make informed decisions.
              </li>
            </ul>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          {/* Share + tags */}
          <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-gray-100">
            <span className="text-gray-500 text-sm font-medium">Tags:</span>
            <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
              {post.category}
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
              Luxury
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
              Trending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR — Categories & Trending
   ============================================================ */
function BlogSidebar({ activeCategory, onCategoryChange, trendingPosts, onReadMore }) {
  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
          <Tag className="w-4 h-4 text-indigo-500" />
          Categories
        </h3>
        <div className="space-y-1.5">
          {blogCategories.map((cat) => {
            const Icon = categoryIcons[cat] || BookOpen;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`w-full flex items-center gap-3 text-left text-sm rounded-xl px-3 py-2.5 transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {cat}
                <span
                  className={`ml-auto text-xs ${
                    isActive ? "text-indigo-400" : "text-gray-300"
                  }`}
                >
                  {cat === "All"
                    ? blogPosts.length
                    : blogPosts.filter((p) => p.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trending Posts */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h3 className="text-gray-900 font-bold text-sm mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-indigo-500" />
          Trending Posts
        </h3>
        <div className="space-y-4">
          {trendingPosts.slice(0, 4).map((post, i) => (
            <button
              key={post.id}
              onClick={() => onReadMore(post)}
              className="w-full flex items-start gap-3 text-left group"
            >
              <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-gray-900 text-sm font-semibold leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {post.title}
                </p>
                <p className="text-gray-400 text-xs mt-1">{post.readTime}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div
        className="rounded-2xl p-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%)",
        }}
      >
        <BookOpen className="w-8 h-8 text-white/80 mx-auto mb-3" />
        <h3
          className="text-white font-bold text-base mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Never Miss a Post
        </h3>
        <p className="text-white/70 text-xs mb-4 leading-relaxed">
          Subscribe to get the latest articles and style guides delivered
          weekly.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-white/40 transition mb-3"
        />
        <button className="w-full bg-white text-indigo-600 text-sm font-semibold rounded-xl py-2.5 hover:bg-indigo-50 transition">
          Subscribe
        </button>
      </div>
    </aside>
  );
}

/* ============================================================
   MAIN BLOG PAGE COMPONENT
   ============================================================ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleReadMore(post) {
    setSelectedPost(post);
  }

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HERO HEADER ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
            INSIGHTS
          </p>
          <h1
            className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Luxora Journal
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Style guides, product reviews, and expert insights for the
            discerning shopper.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 transition"
            />
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Featured post (faqat "All" da va search yo'q bo'lsa) */}
        {activeCategory === "All" && !searchQuery && featuredPost && (
          <div className="mb-10">
            <FeaturedPostCard post={featuredPost} onReadMore={handleReadMore} />
          </div>
        )}

        {/* Grid layout: posts + sidebar */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-10">
          {/* Posts Grid */}
          <div>
            {/* Category pills (mobile only) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 lg:hidden scrollbar-hide">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap text-xs font-semibold rounded-full px-4 py-2 transition ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count */}
            {searchQuery && (
              <p className="text-gray-500 text-sm mb-6">
                <span className="font-semibold text-gray-900">
                  {filteredPosts.length}
                </span>{" "}
                article{filteredPosts.length !== 1 ? "s" : ""} found
                {searchQuery && (
                  <>
                    {" "}
                    for "
                    <span className="text-indigo-600 font-medium">
                      {searchQuery}
                    </span>
                    "
                  </>
                )}
              </p>
            )}

            {/* Posts grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginatedPosts.map((post) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-40" />
                <p className="text-sm font-medium">No articles found</p>
                <p className="text-xs mt-1">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.max(1, p - 1))
                  }
                  disabled={currentPage === 1}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-full text-sm font-semibold transition ${
                        currentPage === pageNum
                          ? "bg-indigo-600 text-white shadow-md"
                          : "border border-gray-200 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar (desktop only) */}
          <div className="hidden lg:block">
            <BlogSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              trendingPosts={blogPosts}
              onReadMore={handleReadMore}
            />
          </div>
        </div>
      </div>

      {/* Post detail modal */}
      {selectedPost && (
        <BlogPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
