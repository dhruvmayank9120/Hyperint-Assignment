import { motion } from "framer-motion";
import { reviews } from "../../../data/reviews";

export default function ReviewShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold">What Our Customers Say ❤️</h2>
        <p className="text-gray-500 text-sm mt-1">
          Real reviews from real users
        </p>
      </motion.div>

      {/* TOP GRID */}
      <div className="grid md:grid-cols-5 gap-6">
        {/* AI SUMMARY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 bg-gradient-to-br from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="font-bold text-lg mb-2">✨ AI Review Summary</h3>
          <p className="text-sm">
            Customers love the immersive sound quality, long battery life, and
            premium design. Perfect for daily use, travel, and workouts.
          </p>
          <p className="text-xs mt-4 opacity-80">
            Based on 2,000+ verified reviews
          </p>
        </motion.div>

        {/* TOP CARDS */}
        {reviews.slice(0, 3).map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <img src={r.image} className="h-32 w-full object-contain mb-2" />
            <p className="text-yellow-500 text-sm">{"⭐".repeat(r.rating)}</p>
            <p className="text-sm mt-1">{r.text}</p>
            <p className="text-xs text-gray-500 mt-1">— {r.name}</p>
          </motion.div>
        ))}

        {/* ADD PHOTO */}
        <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-4 text-gray-400">
          <p className="text-lg">📷</p>
          <p className="text-sm">Add your photo</p>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* LIVE CHAT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow p-4 space-y-3"
        >
          <h3 className="font-semibold">💬 Live Reviews</h3>

          <div className="bg-orange-50 p-2 rounded text-sm">
            “Just got mine 😍”
          </div>

          <div className="bg-green-50 p-2 rounded text-sm">
            “Sound is insane 🔥”
          </div>

          <div className="bg-pink-50 p-2 rounded text-sm">
            “Very comfortable!”
          </div>
        </motion.div>

        {/* CUSTOMER IMAGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow p-4"
        >
          <h3 className="font-semibold mb-3">📸 Customer Moments</h3>
          <div className="grid grid-cols-3 gap-2">
            {reviews.slice(0, 6).map((r) => (
              <img
                key={r.id}
                src={r.image}
                className="h-20 w-full object-cover rounded-lg hover:scale-105 transition"
              />
            ))}
          </div>
        </motion.div>

        {/* VIDEO STYLE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow p-4"
        >
          <h3 className="font-semibold mb-3">🎥 Video Review</h3>

          <div className="relative">
            <img
              src={reviews[0].image}
              className="rounded-xl h-40 w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 p-3 rounded-full">▶</span>
            </div>
          </div>

          <p className="text-sm mt-2">Watch real experience</p>
        </motion.div>
      </div>

      {/* ALL REVIEWS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* LIST */}
        <div className="md:col-span-2 space-y-4">
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl shadow flex gap-4"
            >
              <img src={r.image} className="h-20 w-20 object-contain" />

              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-yellow-500 text-sm">
                  {"⭐".repeat(r.rating)}
                </p>
                <p className="text-sm text-gray-600">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <div className="bg-white p-5 rounded-xl shadow space-y-4">
          <h3 className="font-semibold">⭐ Rate your experience</h3>

          <div className="text-gray-400 text-xl">⭐ ⭐ ⭐ ⭐ ⭐</div>

          <textarea
            placeholder="Write your review..."
            className="w-full border rounded p-2 text-sm"
          />

          <button className="bg-orange-500 text-white w-full py-2 rounded hover:scale-105 transition">
            Submit Review
          </button>

          <p className="text-xs text-gray-400">✔ Verified customers only</p>
        </div>
      </div>
    </div>
  );
}
