import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ReviewClassic from "./variations/ReviewClassic";
import ReviewJoyful from "./variations/ReviewJoyful";
import ReviewInspired from "./variations/ReviewInspired";
import ReviewStory from "./variations/ReviewStory";
import ReviewSmartFilter from "./variations/ReviewSmartFilter";
import ReviewShowcase from "./variations/ReviewShowcase";

export default function ReviewSwitcher() {
  const [active, setActive] = useState("classic");

  const tabs = [
    { key: "classic", label: "Classic" },
    { key: "joyful", label: "Joyful" },
    { key: "inspired", label: "Inspired" },
    { key: "story", label: "Story" },
    { key: "smart", label: "Smart" },
    { key: "showcase", label: "Premium ⭐" },
  ];

  return (
    <div
      className="py-16 px-6 bg-gradient-to-br from-orange-50 to-pink-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* 🔥 HEADING */}
      <h2
        className="text-3xl md:text-4xl text-center mb-10"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "#111827",
        }}
      >
        Customer Reviews ❤️
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-5 py-2 rounded-full text-sm transition-all
              ${
                active === t.key
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white scale-105 shadow-lg"
                  : "bg-white shadow hover:scale-105"
              }`}
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: active === t.key ? "#fff" : "#374151",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {active === "classic" && <ReviewClassic />}
          {active === "joyful" && <ReviewJoyful />}
          {active === "inspired" && <ReviewInspired />}
          {active === "story" && <ReviewStory />}
          {active === "smart" && <ReviewSmartFilter />}
          {active === "showcase" && <ReviewShowcase />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
