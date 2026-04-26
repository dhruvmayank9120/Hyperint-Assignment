import { useState } from "react";
import { reviews, overallStats } from "../../../data/reviews";

/* FILTER + SORT */
const FILTERS = [
  "All",
  "Sound Quality",
  "ANC",
  "Comfort",
  "Studio Grade",
  "Voice Clarity",
  "Value",
  "Build Quality",
];

const SORTS = ["Top Rated", "Most Liked", "Newest"];

/* DEFAULT COMMENTS (ALL TABS COVERED) */
const DEFAULT_COMMENTS = {
  All: [
    {
      id: 1,
      name: "User A",
      body: "Great overall experience.",
      score: 8,
      likes: 10,
    },
    {
      id: 2,
      name: "User B",
      body: "Balanced and reliable.",
      score: 9,
      likes: 12,
    },
  ],
  "Sound Quality": [
    {
      id: 3,
      name: "Audiophile",
      body: "Amazing bass and clarity.",
      score: 9,
      likes: 14,
    },
    {
      id: 4,
      name: "Listener",
      body: "Very immersive sound.",
      score: 8,
      likes: 10,
    },
  ],
  ANC: [
    {
      id: 5,
      name: "Traveler",
      body: "Noise cancellation works great.",
      score: 9,
      likes: 13,
    },
    {
      id: 6,
      name: "Commuter",
      body: "Perfect for daily travel.",
      score: 8,
      likes: 9,
    },
  ],
  Comfort: [
    {
      id: 7,
      name: "Student",
      body: "Super comfortable for long use.",
      score: 9,
      likes: 15,
    },
    {
      id: 8,
      name: "Designer",
      body: "Soft and lightweight.",
      score: 8,
      likes: 10,
    },
  ],
  "Studio Grade": [
    { id: 9, name: "Editor", body: "Accurate for mixing.", score: 8, likes: 7 },
    {
      id: 10,
      name: "Producer",
      body: "Reliable for studio work.",
      score: 9,
      likes: 12,
    },
  ],
  "Voice Clarity": [
    {
      id: 11,
      name: "Manager",
      body: "Great for meetings.",
      score: 8,
      likes: 9,
    },
    {
      id: 12,
      name: "Developer",
      body: "Clear mic quality.",
      score: 9,
      likes: 11,
    },
  ],
  Value: [
    { id: 13, name: "Buyer", body: "Worth every rupee.", score: 9, likes: 16 },
    {
      id: 14,
      name: "Shopper",
      body: "Good value for money.",
      score: 8,
      likes: 10,
    },
  ],
  "Build Quality": [
    {
      id: 15,
      name: "Engineer",
      body: "Feels solid and premium.",
      score: 9,
      likes: 14,
    },
    {
      id: 16,
      name: "User",
      body: "Durable and well-built.",
      score: 8,
      likes: 9,
    },
  ],
};

/* 🔥 NEW COLORS */
const PRIMARY = "#f97316"; // orange
const SECONDARY = "#ec4899"; // pink
const BG = "#fff7f3"; // slight warm bg
const CARD = "#ffffff";
const BORDER = "#fde2d5";
const TEXT = "#1f2937";
const MUTED = "#6b7280";

/* CARD */
const ReviewCard = ({ review }) => (
  <div
    className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition relative overflow-hidden"
    style={{ background: CARD, borderColor: BORDER }}
  >
    {/* gradient strip */}
    <div
      style={{
        height: "4px",
        background: `linear-gradient(to right, ${PRIMARY}, ${SECONDARY})`,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      }}
    />

    <div className="flex justify-between mb-3">
      <div>
        <p style={{ fontFamily: "Poppins", fontWeight: 600, color: TEXT }}>
          {review.name}
        </p>
        <p style={{ fontSize: "12px", color: MUTED }}>
          {review.role || "User"}
        </p>
      </div>

      <span style={{ color: PRIMARY, fontWeight: 600 }}>{review.score}/10</span>
    </div>

    <p style={{ fontFamily: "Inter", color: "#374151" }}>{review.body}</p>

    <div
      className="mt-3 text-sm flex items-center gap-1"
      style={{ color: SECONDARY }}
    >
      ❤️ {review.likes}
    </div>
  </div>
);

/* MAIN */
export default function ReviewSmartFilter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Top Rated");
  const [comments, setComments] = useState({});
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      name: "You",
      body: input,
      score: 8,
      likes: 0,
    };

    setComments((prev) => ({
      ...prev,
      [activeFilter]: [...(prev[activeFilter] || []), newComment],
    }));

    setInput("");
  };

  let filtered = reviews.filter(
    (r) => activeFilter === "All" || r.tag === activeFilter,
  );

  filtered = filtered.sort((a, b) => {
    if (activeSort === "Top Rated") return b.score - a.score;
    if (activeSort === "Most Liked") return b.likes - a.likes;
    return b.id - a.id;
  });

  const fallback = DEFAULT_COMMENTS[activeFilter] || DEFAULT_COMMENTS["All"];

  const displayData =
    filtered.length > 0
      ? [...filtered, ...(comments[activeFilter] || [])]
      : [...fallback, ...(comments[activeFilter] || [])];

  return (
    <section
      className="py-20 px-6"
      style={{ background: BG, fontFamily: "Inter" }}
    >
      {/* HEADER */}
      <div className="flex justify-between mb-10">
        <h2 style={{ fontSize: "40px", fontFamily: "Poppins", color: PRIMARY }}>
          Signal Reviews
        </h2>

        <span
          style={{ fontSize: "40px", fontFamily: "Poppins", color: PRIMARY }}
        >
          {overallStats.average}
        </span>
      </div>

      {/* FILTER */}
      <div className="flex flex-wrap gap-3 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className="px-5 py-2 rounded-full text-sm transition hover:scale-105"
            style={{
              background:
                activeFilter === f
                  ? `linear-gradient(to right, ${PRIMARY}, ${SECONDARY})`
                  : "#fff",
              color: activeFilter === f ? "#fff" : "#374151",
              border: "1px solid #fde2d5",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* SORT */}
      <div className="flex gap-3 mb-8">
        {SORTS.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSort(s)}
            className="px-4 py-2 rounded-lg text-sm transition hover:scale-105"
            style={{
              background:
                activeSort === s
                  ? `linear-gradient(to right, ${SECONDARY}, ${PRIMARY})`
                  : "#fff",
              color: activeSort === s ? "#fff" : "#374151",
              border: "1px solid #fde2d5",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {displayData.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>

      {/* ADD COMMENT */}
      <div className="mt-10 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share your thoughts..."
          className="flex-1 px-4 py-3 rounded-lg border text-sm"
        />

        <button
          onClick={handleAddComment}
          className="px-6 py-3 rounded-lg text-white font-medium hover:scale-105 transition"
          style={{
            background: `linear-gradient(to right, ${PRIMARY}, ${SECONDARY})`,
            fontFamily: "Poppins",
          }}
        >
          Add Comment
        </button>
      </div>
    </section>
  );
}
