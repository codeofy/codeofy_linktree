import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  Youtube,
} from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen text-white flex flex-col items-center justify-between px-4 pt-10 pb-4 transition-opacity duration-1000 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background:
          'radial-gradient(circle at top, #1b002b 0%, #0f001d 40%, #070011 100%)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col items-center">
        {/* Logo with glow and icon overlay */}
        <div className="relative mb-4">
          <img
            src="/logo.png"
            alt="Codeofy Logo"
            className="w-28 h-28 rounded-full shadow-[0_0_25px_5px_rgba(255,0,255,0.4)] animate-pulse border-4 border-pink-600"
          />
          <div className="absolute -bottom-3 -right-3">
            <img
              src="/c-icon.svg.png"
              alt="Codeofy Icon"
              className="w-10 h-10 rounded-full border-2 border-white shadow-[0_0_10px_2px_rgba(0,255,255,0.4)]"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 drop-shadow-lg">
          Codeofy
        </h1>

        {/* Tagline */}
        <p className="text-sm text-gray-300 mt-1 italic tracking-wide">
          Your Vision, Our Code
        </p>

        {/* Description */}
        <p className="text-lg mt-3 text-gray-300 text-center max-w-md font-light">
          🚀 Building creative, bold & responsive websites for startups, businesses & creators.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl my-6">
          <a href="https://instagram.com/codeofy.in" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
            <Instagram />
          </a>
          <a href="https://facebook.com/codeofy" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <Facebook />
          </a>
          <a href="https://twitter.com/codeofy" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">
            <Twitter />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">
            <Phone />
          </a>
          <a href="mailto:info@codeofy.in" className="hover:text-purple-300 transition">
            <Mail />
          </a>
          <a href="https://youtube.com/@codeofy" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            <Youtube />
          </a>
        </div>

        {/* Link Buttons */}
        <div className="w-full max-w-md space-y-4 mt-2">
          {[
            { label: '🔗 Codeofy – Official Website', href: 'https://codeofy.in', gradient: 'from-pink-600 to-purple-600', text: 'white' },
            { label: '💼 Codeofy | LinkedIn', href: 'https://www.linkedin.com/company/codeofy-tech/' },
            { label: '📸 Follow us on Instagram', href: 'https://instagram.com/codeofy.in' },
            { label: '🎥 Watch on YouTube', href: 'https://youtube.com/@codeofy' },
            { label: '📘 Like us on Facebook', href: 'https://facebook.com/codeofy' },
            { label: '🐦 Follow us on Twitter', href: 'https://twitter.com/codeofy' },
            { label: '📞 Chat on WhatsApp', href: 'https://wa.me/919876543210' },
            { label: '📧 Email Us', href: 'mailto:info@codeofy.in' },
            { label: '📅 Book a Free Consultation', href: 'https://calendly.com/codeofy' },
            { label: '🌟 See Reviews on Clutch', href: 'https://clutch.co/profile/codeofy' },
            { label: '💳 Make a Payment (Razorpay)', href: 'https://rzp.io/l/codeofy-payment', gradient: 'from-yellow-400 to-pink-500', text: 'black' },
          ].map(({ label, href, gradient, text }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`block px-6 py-4 rounded-2xl text-center font-medium transform transition duration-300 hover:scale-105 ${
                gradient
                  ? `bg-gradient-to-r ${gradient} text-${text}`
                  : 'bg-zinc-900/80 backdrop-blur hover:bg-zinc-800 text-white'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 w-full max-w-md text-center text-sm text-gray-400 border-t border-pink-600 pt-4">
        <p>© {new Date().getFullYear()} Codeofy. All rights reserved.</p>
        <p className="mt-1">
          Built with 💖 by{' '}
          <a
            href="https://codeofy.in"
            className="underline hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeofy
          </a>
        </p>
        <p className="mt-1">📧 info@codeofy.in</p>
        <div className="mt-1 space-x-4">
          <a href="/terms" className="underline hover:text-pink-300">
            Terms
          </a>
          <a href="/privacy" className="underline hover:text-pink-300">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
