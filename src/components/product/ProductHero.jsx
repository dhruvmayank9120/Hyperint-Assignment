import { useState } from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/headphone-4.jpg";
import img2 from "../../assets/headphone-6.jpg";
import img3 from "../../assets/headphone-7.jpg";

export default function ProductHero() {
  const images = [img1, img2, img3];
  const [active, setActive] = useState(images[0]);
  const [qty, setQty] = useState(1);

  return (
    <div
      className="px-6 py-10 bg-[#f9fafb]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div initial={{ x: -40 }} animate={{ x: 0 }}>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src={active}
              className="h-[380px] w-full object-contain transition"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActive(img)}
                className="h-16 w-16 cursor-pointer bg-white rounded-xl p-2 hover:scale-110 transition border"
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          className="space-y-5"
        >
          {/* TITLE */}
          <h1
            className="text-5xl md:text-6xl"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111827",
            }}
          >
            SmartFocus Pro 🎧
          </h1>

          {/* RATING */}
          <p className="text-yellow-500 text-lg">
            ⭐⭐⭐⭐⭐ <span className="text-gray-600">(2,430 reviews)</span>
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <span
              className="text-4xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              ₹15,999
            </span>

            <span className="line-through text-gray-400 text-lg">₹19,999</span>

            <span className="text-green-600 text-sm font-medium">20% OFF</span>
          </div>

          {/* FEATURES */}
          <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>🎧 Active Noise Cancellation</li>
            <li>🔋 30 Hours Battery Life</li>
            <li>⚡ Fast Charging (10 min = 5 hrs)</li>
            <li>📶 Bluetooth 5.3</li>
          </ul>

          {/* 🔥 CREATIVE QUANTITY */}
          <div className="flex items-center gap-4 pt-2">
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              Quantity:
            </span>

            <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
              <button
                onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
                className="text-lg px-2 hover:scale-125 transition"
                style={{ color: "#f97316" }}
              >
                −
              </button>

              <span
                className="px-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {qty}
              </span>

              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="text-lg px-2 hover:scale-125 transition"
                style={{ color: "#f97316" }}
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button className="bg-orange-500 px-6 py-3 text-white rounded-xl font-medium hover:bg-orange-600 transition">
              Buy Now
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-medium hover:bg-orange-50 transition">
              Add to Cart
            </button>
          </div>

          {/* TRUST INFO */}
          <p className="text-sm text-gray-500 pt-2">
            🚚 Free Delivery • 🔁 7-Day Replacement • 🛡 1 Year Warranty
          </p>
        </motion.div>
      </div>
    </div>
  );
}
