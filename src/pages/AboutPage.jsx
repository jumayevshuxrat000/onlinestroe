import React from "react";
import {
  ShieldCheck,
  Award,
  Truck,
  RotateCcw,
  Users,
  Globe,
  Heart,
  Target,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* ============================================================
   REAL IMAGES for About page
   ============================================================ */
const STORE_IMAGE = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80";
const TEAM_IMAGE = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80";

/* ============================================================
   ABOUT PAGE STATS
   ============================================================ */
const aboutStats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "120+", label: "Brand Partners" },
  { value: "99.9%", label: "Authenticity Rate" },
  { value: "4.9★", label: "Average Rating" },
];

/* ============================================================
   TEAM MEMBERS
   ============================================================ */
const teamMembers = [
  {
    name: "Alexander Pierce",
    role: "Founder & CEO",
    initials: "AP",
    bg: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
  },
  {
    name: "Sophia Laurent",
    role: "Chief Design Officer",
    initials: "SL",
    bg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
  },
  {
    name: "James Rivera",
    role: "Head of Technology",
    initials: "JR",
    bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  },
  {
    name: "Emma Collins",
    role: "Head of Curation",
    initials: "EC",
    bg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
  },
];

/* ============================================================
   VALUES
   ============================================================ */
const values = [
  {
    icon: ShieldCheck,
    title: "Authenticity First",
    description: "Every product undergoes rigorous authentication by certified experts before reaching our customers.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Our customers are at the heart of everything we do. We continuously improve based on their feedback.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting luxury lovers across 120+ countries with premium brands and exceptional service.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    title: "Excellence Always",
    description: "From curation to delivery, we maintain the highest standards of quality in every interaction.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

/* ============================================================
   MILESTONES
   ============================================================ */
const milestones = [
  { year: "2018", title: "Founded", description: "Started as a boutique online shop with a vision for accessible luxury." },
  { year: "2019", title: "1K Customers", description: "Reached our first thousand happy customers within a year." },
  { year: "2020", title: "Global Expansion", description: "Expanded to 50+ countries with partnerships across major luxury brands." },
  { year: "2022", title: "50K+ Customers", description: "Crossed 50,000 customers milestone with 99.9% authenticity guarantee." },
  { year: "2024", title: "120+ Brands", description: "Partnered with 120+ luxury brands, becoming a premier marketplace." },
];

/* ============================================================
   ABOUT PAGE COMPONENT
   ============================================================ */
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, #3b2f66 0%, transparent 45%), radial-gradient(circle at 85% 80%, #2b3d7a 0%, transparent 50%), linear-gradient(135deg, #14132b 0%, #1b1f3a 50%, #23285c 100%)",
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.2em] mb-4">
            OUR STORY
          </p>
          <h1
            className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Redefining Luxury{" "}
            <br className="hidden sm:block" />
            Shopping for the{" "}
            <br className="hidden sm:block" />
            <span
              style={{
                background: "linear-gradient(90deg, #818cf8 0%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Age
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded in 2018, Luxora has grown from a boutique online shop to the world's
            premier luxury marketplace, trusted by over 50,000 customers across 120 countries.
          </p>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-full">
                  <div className="border-2 border-indigo-100 rounded-2xl px-6 py-4 w-full max-w-[180px] hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300">
                    <p
                      className="text-indigo-600 font-bold text-2xl sm:text-3xl"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR MISSION ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
                OUR MISSION
              </p>
              <h2
                className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Making Luxury Accessible, Authentic, and Aspirational
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  We believe luxury shouldn't be exclusive to the few. Our mission is to
                  democratize access to the world's finest goods while maintaining the
                  highest standards of authenticity, service, and experience.
                </p>
                <p>
                  Every product on Luxora undergoes a rigorous authentication process by
                  our team of certified experts, ensuring you receive nothing but the
                  genuine article.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: CheckCircle2, text: "100% Authentic Products" },
                  { icon: CheckCircle2, text: "Expert Authentication" },
                  { icon: CheckCircle2, text: "Global Shipping" },
                  { icon: CheckCircle2, text: "Premium Support" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={STORE_IMAGE}
                alt="Luxora luxury store interior"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
              OUR VALUES
            </p>
            <h2
              className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR JOURNEY / TIMELINE ===== */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
              OUR JOURNEY
            </p>
            <h2
              className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Milestones Along the Way
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-indigo-100 sm:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-indigo-600 border-4 border-indigo-100 -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <span className="inline-block text-indigo-600 text-xs font-bold tracking-widest mb-1">
                      {m.year}
                    </span>
                    <h3 className="text-gray-900 font-bold text-lg mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
              OUR TEAM
            </p>
            <h2
              className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Meet the People Behind Luxora
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg"
                  style={{ background: member.bg }}
                >
                  {member.initials}
                </div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-base">{member.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={TEAM_IMAGE}
                alt="Luxora team"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-indigo-600 text-xs font-bold tracking-[0.2em] mb-3">
                WHY LUXORA
              </p>
              <h2
                className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Why 50,000+ Customers Trust Us
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Certified Authentication",
                    desc: "Every item is verified by experts before shipping.",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Truck,
                    title: "Global Express Shipping",
                    desc: "Fast, insured delivery to 120+ countries worldwide.",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                  {
                    icon: RotateCcw,
                    title: "Hassle-Free Returns",
                    desc: "30-day no-questions-asked return policy on all items.",
                    color: "text-orange-600",
                    bg: "bg-orange-50",
                  },
                  {
                    icon: Award,
                    title: "Premium Support",
                    desc: "24/7 dedicated customer support with personal shoppers.",
                    color: "text-violet-600",
                    bg: "bg-violet-50",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #8b5cf6 100%)",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Have Questions? Let's Talk
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Our team is ready to assist you. Reach out to us through any of the channels below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
            {[
              { icon: Mail, text: "hello@luxora.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "New York, NY" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/90 text-sm">
                <item.icon className="w-4 h-4" />
                {item.text}
              </div>
            ))}
          </div>

          <button className="bg-white text-indigo-600 text-sm font-bold rounded-full px-8 py-3.5 shadow-lg hover:bg-indigo-50 transition">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
