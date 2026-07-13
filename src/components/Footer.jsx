import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ShoppingBag } from "lucide-react";

// Sahifa pastki qismi (footer): brend ma'lumoti, linklar va newsletter forma
export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const shopLinks = ["New Arrivals", "Best Sellers", "Sale Items", "Gift Cards", "Brands"];
  const supportLinks = ["Help Center", "Track Order", "Returns", "Contact Us", "Size Guide"];
  const socialIcons = [Facebook, Twitter, Instagram, Youtube, Linkedin];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: bu yerga real newsletter API chaqiruvi ulanadi
    console.log("Obuna bo'ldi:", email);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brend qismi */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <ShoppingBag size={16} className="text-white" />
              </span>
              <span className="text-white font-bold text-lg">Luxora</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The premium marketplace for luxury goods, curated for the
              discerning customer. Authenticity guaranteed on every purchase.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label="social link"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors"
                >
                  <Icon size={14} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop linklari */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support linklari */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter forma */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive deals and new arrivals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full text-sm bg-gray-900 border border-gray-800 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg py-2.5 transition-colors"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-xs text-green-400">Obuna muvaffaqiyatli amalga oshdi!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Luxora. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
