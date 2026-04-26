import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 backdrop-blur-lg bg-white/60 border-b"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* 🔥 BRAND */}
        <h1
          className="text-2xl"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            background: "linear-gradient(to right, #f97316, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Waveon
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8">
          {["Product", "Reviews", "Features"].map((i) => (
            <a
              key={i}
              className="relative group cursor-pointer text-sm"
              style={{
                fontWeight: 500,
                color: "#374151",
              }}
            >
              {i}

              <span className="absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 w-0 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <button
          className="px-5 py-2 rounded-full transition hover:scale-105"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            background: "#f97316",
            color: "#fff",
          }}
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}
