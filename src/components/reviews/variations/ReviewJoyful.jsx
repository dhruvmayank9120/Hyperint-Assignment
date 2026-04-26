import { useState, useEffect, useRef } from "react";
import { reviews, overallStats } from "../../../data/reviews";

const palette = [
  { bg: "#fff8e8", accent: "#f5a623", border: "#f5d88a", text: "#7a5c00" },
  { bg: "#e8f5ff", accent: "#3a9ff5", border: "#8acff5", text: "#004a7a" },
  { bg: "#f5e8ff", accent: "#a855f7", border: "#d4a8f5", text: "#5a007a" },
  { bg: "#e8fff5", accent: "#22c55e", border: "#8af5c4", text: "#005a30" },
  { bg: "#ffe8f5", accent: "#f53a7a", border: "#f58ab8", text: "#7a0038" },
  { bg: "#fff0e8", accent: "#f57a3a", border: "#f5b88a", text: "#7a2e00" },
];

const EmojiRating = ({ score }) => {
  const emoji =
    score >= 9.5 ? "🔥" : score >= 9 ? "⭐" : score >= 8.5 ? "✨" : "👍";
  return <span style={{ fontSize: "30px" }}>{emoji}</span>;
};

const JoyCard = ({ review, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const [showImage, setShowImage] = useState(false); // ✅ NEW

  const c = palette[index % palette.length];
  const rotations = [-2, 1.5, -1, 2, -1.5, 1];
  const rot = hovered ? 0 : rotations[index % rotations.length];

  return (
    <>
      <div
        className="relative cursor-pointer"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? `rotate(${rot}deg) translateY(${hovered ? "-8px" : "0"})`
            : "translateY(30px)",
          transition: `opacity 0.5s ${index * 80}ms, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="p-5 rounded-2xl border-2"
          style={{
            background: c.bg,
            borderColor: hovered ? c.accent : c.border,
            boxShadow: hovered
              ? `0 16px 40px ${c.accent}30`
              : `4px 4px 0 ${c.border}`,
          }}
        >
          {/* IMAGE (CLICKABLE) */}
          <div className="mb-3">
            <img
              src={review.image}
              alt={review.name}
              onClick={(e) => {
                e.stopPropagation(); // 🔥 IMPORTANT
                setShowImage(true);
              }}
              className="w-full h-36 object-contain rounded-xl bg-white p-2 cursor-pointer hover:scale-105 transition"
            />
          </div>

          {/* Top */}
          <div className="flex justify-between items-start mb-3">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: c.accent,
                color: "#fff",
              }}
            >
              {review.avatar}
            </div>
            <EmojiRating score={review.score} />
          </div>

          {/* Score */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="px-3 py-1 rounded-full text-base font-bold"
              style={{
                background: c.accent,
                color: "#fff",
              }}
            >
              {review.score}/10
            </span>

            {review.verified && (
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: c.border,
                  color: c.text,
                }}
              >
                ✓ Verified
              </span>
            )}
          </div>

          {/* Title */}
          <p className="font-semibold text-base mb-2" style={{ color: c.text }}>
            {review.title}
          </p>

          {/* Body */}
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: `${c.text}cc` }}
          >
            {review.body.slice(0, 120)}...
          </p>

          {/* Meta */}
          <p className="text-xs mb-2" style={{ color: `${c.text}99` }}>
            🎧 Daily usage • 2 weeks • Verified buyer
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: c.text }}>
                {review.name}
              </p>
              <p className="text-xs" style={{ color: `${c.text}99` }}>
                {review.role}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span style={{ color: c.accent }}>♥</span>
              <span className="text-xs" style={{ color: `${c.text}99` }}>
                {review.likes}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 IMAGE ZOOM MODAL */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={review.image}
            alt="zoom"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default function ReviewJoyful() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#fdfaf4]">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold">
          People are <span style={{ color: "#f5a623" }}>obsessed.</span>
        </h2>
        <p className="text-base text-gray-500 mt-3">
          {overallStats.total.toLocaleString()} listeners shared their thoughts
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <JoyCard key={r.id} review={r} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
