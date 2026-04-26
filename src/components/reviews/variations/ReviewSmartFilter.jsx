import { useState, useEffect, useRef } from "react";
import { reviews, overallStats } from "../../../data/reviews";

/* METRIC CELL */
const MetricCell = ({ label, value }) => (
  <div
    className="text-center"
    style={{ borderRight: "2px solid #1a1a1a", padding: "16px 12px" }}
  >
    <p
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
        fontSize: "30px",
        letterSpacing: "-0.025em",
        color: "#1a1a1a",
      }}
    >
      {value}
    </p>
    <p
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "11px",
        color: "#6b7280",
        letterSpacing: "0.08em",
      }}
    >
      {label}
    </p>
  </div>
);

/* CARD */
const StoryCard = ({ review, index, visible, updateImage }) => {
  const [hovered, setHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const isOrange = index % 3 === 0;

  return (
    <>
      <div
        className="relative"
        style={{
          borderRight: "2px solid #1a1a1a",
          borderBottom: "2px solid #1a1a1a",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transition: `all 0.5s ${index * 70}ms`,
          background: hovered
            ? isOrange
              ? "#d4400a"
              : "#1a1a1a"
            : "transparent",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="p-5 md:p-6 space-y-3">
          {/* IMAGE */}
          <img
            src={review.image}
            alt={review.name}
            onClick={() => setShowImage(true)}
            className="w-full h-28 object-contain bg-[#f2ede4] p-2 rounded cursor-pointer hover:scale-105 transition"
          />

          {/* UPLOAD */}
          <input
            type="file"
            accept="image/*"
            className="text-xs"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                updateImage(review.id, url);
              }
            }}
          />

          {/* SCORE */}
          <div className="flex items-baseline gap-2">
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "52px",
                letterSpacing: "-0.025em",
                color: hovered ? "#f2ede4" : isOrange ? "#d4400a" : "#1a1a1a",
              }}
            >
              {review.score}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: hovered ? "#f2ede4aa" : "#888",
              }}
            >
              /10
            </span>
          </div>

          {/* USER */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: hovered ? "#f2ede4aa" : "#6b7280",
            }}
          >
            {review.handle || review.name} · {(review.role || "").toUpperCase()}
          </p>

          {/* TEXT */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: 1.75,
              color: hovered ? "#f2ede4" : "#374151",
            }}
          >
            "{review.body?.slice(0, 120) || "Amazing product!"}..."
          </p>

          {/* EXTRA */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: hovered ? "#f2ede4aa" : "#6b7280",
            }}
          >
            🎧 Daily use • 2 weeks • Verified listener
          </p>

          {/* METRICS */}
          <div className="flex gap-2 text-[10px]">
            {Object.entries(review.metrics || {})
              .slice(0, 2)
              .map(([k, v]) => (
                <span
                  key={k}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    border: `1px solid ${hovered ? "#f2ede444" : "#1a1a1a"}`,
                    padding: "2px 6px",
                    color: hovered ? "#f2ede4" : "#1a1a1a",
                  }}
                >
                  {k}: {v}
                </span>
              ))}
          </div>

          {/* TAG */}
          <span
            style={{
              display: "inline-block",
              padding: "5px 12px",
              border: `1px solid ${hovered ? "#f2ede444" : "#1a1a1a"}`,
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.08em",
              fontWeight: 500,
              color: hovered ? "#f2ede4" : "#1a1a1a",
            }}
          >
            {review.tag?.toUpperCase()}
          </span>

          {/* LIKES */}
          <div
            className="absolute top-4 right-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: hovered ? "#f2ede4aa" : "#9ca3af",
            }}
          >
            ♥ {review.likes}
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={review.image}
            className="max-w-[80%] max-h-[80%] rounded-xl shadow-lg"
          />
        </div>
      )}
    </>
  );
};

/* MAIN */
export default function ReviewStory() {
  const [visible, setVisible] = useState(false);
  const [localReviews, setLocalReviews] = useState(() => {
    const saved = localStorage.getItem("reviews");
    return saved ? JSON.parse(saved) : reviews;
  });

  const ref = useRef(null);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(localReviews));
  }, [localReviews]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const updateImage = (id, newImg) => {
    setLocalReviews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, image: newImg } : item)),
    );
  };

  return (
    <section
      ref={ref}
      style={{ background: "#f2ede4", fontFamily: "Inter, sans-serif" }}
    >
      <div style={{ border: "3px solid #1a1a1a" }}>
        {/* TOP BAR */}
        <div className="flex justify-between px-6 py-3 bg-black text-white text-xs">
          <span>CUSTOMER REVIEWS</span>
          <span>{overallStats.total.toLocaleString()} VERIFIED</span>
        </div>

        {/* HEADER */}
        <div className="grid md:grid-cols-2 p-8 items-center border-b-2 border-black">
          <h2
            className="text-6xl"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.035em",
            }}
          >
            WHAT THEY SAID
          </h2>

          <div className="text-right">
            <p
              className="text-5xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              {overallStats.average}
            </p>
            <p className="text-sm text-gray-600">out of 10</p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3">
          {localReviews.map((r, i) => (
            <StoryCard
              key={r.id}
              review={r}
              index={i}
              visible={visible}
              updateImage={updateImage}
            />
          ))}
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-t-2 border-black">
          <MetricCell
            label="RECOMMEND"
            value={`${overallStats.recommended}%`}
          />
          <MetricCell label="SOUND" value={overallStats.breakdown.sound} />
          <MetricCell label="COMFORT" value={overallStats.breakdown.comfort} />
          <MetricCell label="BUILD" value={overallStats.breakdown.build} />
          <MetricCell label="VALUE" value={overallStats.breakdown.value} />
        </div>
      </div>
    </section>
  );
}
