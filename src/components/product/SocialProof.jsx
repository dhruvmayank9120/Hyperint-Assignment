export default function SocialProof() {
  return (
    <section
      className="py-16 px-6"
      style={{
        background: "linear-gradient(to right, #fff7ed, #fff1f2, #fdf2f8)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* HEADING */}
        <h2
          className="text-3xl md:text-4xl mb-3"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Loved by Thousands 🎧
        </h2>

        <p className="text-gray-600 mb-10 text-base">
          Real feedback from real users — see why people trust Waveon
        </p>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white px-8 py-6 rounded-xl shadow-sm">
            <p
              className="text-3xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              4.8 ⭐
            </p>
            <p className="text-sm text-gray-500 mt-1">Average Rating</p>
          </div>

          <div className="bg-white px-8 py-6 rounded-xl shadow-sm">
            <p
              className="text-3xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              2,430+
            </p>
            <p className="text-sm text-gray-500 mt-1">Happy Customers</p>
          </div>

          <div className="bg-white px-8 py-6 rounded-xl shadow-sm">
            <p
              className="text-3xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
              }}
            >
              97%
            </p>
            <p className="text-sm text-gray-500 mt-1">Recommend</p>
          </div>
        </div>

        {/* TRUST LINE */}
        <p className="mt-8 text-sm text-gray-600">
          Trusted by creators, gamers, and professionals worldwide 🎧
        </p>
      </div>
    </section>
  );
}
