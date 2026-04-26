import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/headphone-4.jpg";
import img2 from "../../assets/headphone-5.jpg";
import img3 from "../../assets/headphone-6.jpg";
import img4 from "../../assets/headphone-7.jpg";
import img5 from "../../assets/headphone-8.jpg";

// reuse to make 8
import img6 from "../../assets/headphone-4.jpg";
import img7 from "../../assets/headphone-5.jpg";
import img8 from "../../assets/headphone-6.jpg";

export default function ProductHero() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [qty, setQty] = useState(1);

  const ITEMS = 4;
  const totalPages = Math.ceil(images.length / ITEMS);

  // MAIN IMAGE NAV
  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // THUMBNAIL NAV
  const nextPage = () => {
    setDirection(1);
    setPage((p) => (p + 1 < totalPages ? p + 1 : 0));
  };

  const prevPage = () => {
    setDirection(-1);
    setPage((p) => (p - 1 >= 0 ? p - 1 : totalPages - 1));
  };

  const start = page * ITEMS;
  const visible = images.slice(start, start + ITEMS);

  return (
    <div className="px-6 py-10 bg-[#f9fafb] pt-28">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* 🔥 MAIN IMAGE CAROUSEL */}
          <div className="relative bg-white p-6 rounded-2xl shadow overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="product"
                initial={{ x: direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="h-[380px] w-full object-contain"
              />
            </AnimatePresence>

            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-1 rounded-full"
            >
              →
            </button>
          </div>

          {/* 🔥 THUMBNAIL CAROUSEL (4 ITEMS) */}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prevPage}
              className="bg-white shadow px-3 py-1 rounded-full"
            >
              ←
            </button>

            <div className="overflow-hidden w-full mx-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ x: direction * 100 }}
                  animate={{ x: 0 }}
                  exit={{ x: -direction * 100 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-between"
                >
                  {visible.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => setIndex(images.indexOf(img))}
                      className={`h-20 w-20 cursor-pointer bg-white rounded-xl p-2 border transition
                      ${
                        images[index] === img
                          ? "border-orange-500 shadow-md"
                          : "border-gray-200"
                      }`}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextPage}
              className="bg-white shadow px-3 py-1 rounded-full"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5 max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            SmartFocus Pro 🎧
          </h1>

          <p className="text-yellow-500 text-lg">
            ⭐⭐⭐⭐⭐ <span className="text-gray-600">(2,430 reviews)</span>
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-4xl font-bold">₹15,999</span>
            <span className="line-through text-gray-400 text-lg">₹19,999</span>
            <span className="text-green-600 text-sm">20% OFF</span>
          </div>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li>🎧 Active Noise Cancellation</li>
            <li>🔋 30 Hours Battery Life</li>
            <li>⚡ Fast Charging</li>
            <li>📶 Bluetooth 5.3</li>
          </ul>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
              <button
                onClick={() => setQty((p) => (p > 1 ? p - 1 : 1))}
                className="px-2 text-orange-500"
              >
                −
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty((p) => p + 1)}
                className="px-2 text-orange-500"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-orange-500 px-6 py-3 text-white rounded-xl">
              Buy Now
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
