import { useState, useEffect, useRef, useMemo } from "react";
import { reviews, overallStats } from "../../../data/reviews";

/* COLORS */
const PRIMARY = "#f97316";
const SECONDARY = "#ec4899";
const ACCENT = "#eab308";
const TEXT = "#111827";
const MUTED = "#6b7280";

const WaveBar = ({ delay, height, duration, active }) => (
  <div
    className="flex-1 rounded-sm origin-bottom transition-colors duration-300"
    style={{
      height: `${height}px`,
      background: active ? PRIMARY : "#e5e7eb",
      animation: `waveAnim ${duration}s ease-in-out ${delay}ms infinite alternate`,
      opacity: active ? 0.8 : 1,
    }}
  />
);

/* ✅ FIXED WAVEFORM (NO Math.random) */
const Waveform = ({ count = 30, active = false }) => {
  const bars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const height = 6 + ((i * 7) % 20); // pseudo-random
      const delay = i * 40;
      const duration = 0.6 + (i % 5) * 0.12;

      return { height, delay, duration };
    });
  }, [count]);

  return (
    <div className="flex items-center gap-[2px] h-8 mb-5">
      {bars.map((b, i) => (
        <WaveBar key={i} {...b} active={active} />
      ))}
    </div>
  );
};

const StarRow = ({ score }) => {
  const full = Math.floor(score / 2);
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className="w-2.5 h-2.5"
          style={{
            background: i < full ? ACCENT : "#e5e7eb",
            clipPath:
              "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
          }}
        />
      ))}
    </div>
  );
};

export default function ReviewClassic() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = reviews[0];
  const rest = reviews.slice(1);

  return (
    <>
      {/* ZOOM */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="zoom"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}

      <style>{`
        @keyframes waveAnim { 0% { transform: scaleY(0.25); } 100% { transform: scaleY(1); } }
        @keyframes fillBar { from { width: 0; } }
        .classic-reveal { opacity: 0; transform: translateY(24px); transition: 0.6s; }
        .classic-reveal.show { opacity: 1; transform: translateY(0); }
      `}</style>

      <section ref={ref} className="bg-gray-50 py-20 px-6 md:px-12">
        {/* HEADER */}
        <div className={`classic-reveal ${visible ? "show" : ""}`}>
          <h2 style={{ fontSize: "clamp(56px,9vw,100px)", color: TEXT }}>
            Sound
            <br />
            Reviewed
          </h2>

          <p style={{ fontSize: "14px", color: MUTED, marginBottom: "48px" }}>
            — WHAT THE LISTENERS SAY —
          </p>
        </div>

        {/* FEATURED */}
        <div
          className={`classic-reveal ${visible ? "show" : ""} p-7 rounded-xl text-white relative overflow-hidden`}
          style={{
            background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
            boxShadow:
              hovered === "featured"
                ? "0 10px 30px rgba(249,115,22,0.25)"
                : "none",
          }}
          onMouseEnter={() => setHovered("featured")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={featured.image}
            alt={featured.name}
            onClick={() => setSelectedImage(featured.image)}
            className="absolute inset-0 w-full h-full object-cover opacity-20 cursor-zoom-in"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10">
            <Waveform count={42} active={hovered === "featured"} />

            <div className="flex items-baseline gap-3 mb-3">
              <span style={{ fontSize: "64px" }}>{featured.score}</span>
              <span className="text-lg">/ 10</span>
              <StarRow score={featured.rating} />
            </div>

            <p className="text-base opacity-90">
              {featured.name.toUpperCase()} — {featured.role.toUpperCase()}
            </p>

            <p className="text-lg leading-relaxed mt-1">"{featured.body}"</p>

            <span className="text-sm mt-2 inline-block">EDITOR'S PICK</span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
          {rest.map((r) => (
            <div
              key={r.id}
              className={`classic-reveal ${visible ? "show" : ""} p-6 rounded-xl shadow hover:shadow-lg transition bg-white flex gap-5`}
              onMouseEnter={() => setHovered(r.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={r.image}
                alt={r.name}
                onClick={() => setSelectedImage(r.image)}
                className="w-28 h-28 object-contain rounded-xl bg-gray-50 p-2 cursor-zoom-in"
              />

              <div className="flex-1">
                <Waveform count={28} active={hovered === r.id} />

                <div className="flex items-center gap-3 mb-2">
                  <span style={{ fontSize: "46px", color: PRIMARY }}>
                    {r.score}
                  </span>
                  <StarRow score={r.rating} />
                </div>

                <p className="text-base font-semibold text-gray-800 mb-1">
                  {r.tag} Experience
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  "{r.body}"
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  — {r.name}, {r.role}
                </p>

                <span
                  className="inline-block mt-2 text-sm px-3 py-1 rounded-full"
                  style={{
                    border: `1px solid ${PRIMARY}`,
                    color: PRIMARY,
                  }}
                >
                  {r.tag.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DISTRIBUTION */}
        <div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-500">RATING DISTRIBUTION</span>
            <span style={{ color: PRIMARY }} className="text-sm">
              {overallStats.total.toLocaleString()} REVIEWS
            </span>
          </div>

          {(overallStats?.distribution || []).map((d, i) => (
            <div key={d.stars} className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-500">{d.stars}★</span>

              <div className="flex-1 h-[6px] bg-gray-200">
                <div
                  style={{
                    width: `${d.pct}%`,
                    background: PRIMARY,
                    animation: `fillBar 1.2s ease ${i * 80}ms both`,
                    height: "100%",
                  }}
                />
              </div>

              <span className="text-sm text-gray-500">{d.pct}%</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
