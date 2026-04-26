import { useState, useEffect, useRef } from "react";
import { reviews, overallStats } from "../../../data/reviews";

/* GOLD THEME */
const GOLD = "#c8a840";

const Stars = ({ score }) => (
  <div className="flex gap-[4px]">
    {Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className="w-3 h-3"
        style={{
          background: i < Math.floor(score / 2) ? GOLD : "#1a1a1a",
          clipPath:
            "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
        }}
      />
    ))}
  </div>
);

const FilmFrame = ({ review, index, visible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[260px] border cursor-pointer"
      style={{
        background: "#0f0f0f",
        borderColor: hovered ? GOLD : "#1e1e1e",
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        boxShadow: hovered ? "0 10px 30px rgba(200,168,64,0.15)" : "none",
        transition: `all 0.4s ${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* TOP FRAME */}
      <div className="relative h-[160px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={review.image}
          alt={review.name}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* SCANLINES */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(0deg,transparent 0,transparent 3px,rgba(0,0,0,0.2) 3px,rgba(0,0,0,0.2) 4px)",
          }}
        />

        {/* INDEX */}
        <span
          className="absolute top-2 left-2"
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {String(index + 1).padStart(2, "0")} ▶
        </span>

        {/* SCORE */}
        <span
          className="absolute bottom-3 left-4"
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: "58px",
            fontStyle: "italic",
            color: hovered ? GOLD : "rgba(200,168,64,0.5)",
          }}
        >
          {review.score}
        </span>
      </div>

      {/* BODY */}
      <div className="p-4">
        <Stars score={review.rating} />

        <p
          className="mt-3 mb-2"
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "11px",
            color: "#aaa",
            letterSpacing: "0.06em",
          }}
        >
          {review.name.toUpperCase()} · {review.role.toUpperCase()}
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#e5dfd4",
            lineHeight: 1.7,
          }}
        >
          "{review.body.slice(0, 110)}…"
        </p>

        <span
          className="inline-block mt-3 px-3 py-1 text-[10px]"
          style={{
            border: `1px solid ${GOLD}`,
            color: GOLD,
            fontFamily: "'Space Mono',monospace",
          }}
        >
          {review.tag.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default function ReviewInspired() {
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,600&family=Space+Mono:wght@400;700&display=swap');
      `}</style>

      <section ref={ref} className="bg-[#080808] py-20 px-6 md:px-12">
        {/* HEADER */}
        <div style={{ opacity: visible ? 1 : 0, transition: "0.6s" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(44px,7vw,80px)",
              fontStyle: "italic",
              color: "#f5f0e8",
            }}
          >
            What the Critics Say
          </h2>

          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "13px",
              color: "#888",
              letterSpacing: "0.18em",
              marginBottom: "50px",
            }}
          >
            VERIFIED LISTENER REVIEWS
          </p>
        </div>

        {/* CARDS */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {reviews.map((r, i) => (
            <FilmFrame key={r.id} review={r} index={i} visible={visible} />
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] mt-12 bg-[#1a1a1a]">
          {[
            { label: "Average Score", value: overallStats.average },
            {
              label: "Total Reviews",
              value: overallStats.total.toLocaleString(),
            },
            { label: "Recommended", value: `${overallStats.recommended}%` },
            { label: "Sound Score", value: overallStats.breakdown.sound },
          ].map((s) => (
            <div key={s.label} className="bg-[#0c0c0c] px-6 py-6">
              <p className="text-[11px] text-[#888] mb-2">
                {s.label.toUpperCase()}
              </p>
              <p className="text-[36px]" style={{ color: GOLD }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
