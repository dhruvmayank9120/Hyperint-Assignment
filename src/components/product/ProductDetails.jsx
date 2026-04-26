export default function ProductDetails() {
  return (
    <section
      className="bg-[#f9fafb] py-20 px-6 md:px-12"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#111827",
            }}
          >
            Why choose Waveon?
          </h2>

          <p
            className="mt-3 text-base"
            style={{
              color: "#6b7280",
              lineHeight: 1.6,
            }}
          >
            Built for performance, comfort and everyday use
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3
              className="text-lg mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              🎧 Active Noise Cancellation
            </h3>
            <p
              className="text-sm"
              style={{ color: "#6b7280", lineHeight: 1.6 }}
            >
              Block unwanted noise and focus on what matters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3
              className="text-lg mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              🔋 30 Hours Battery
            </h3>
            <p
              className="text-sm"
              style={{ color: "#6b7280", lineHeight: 1.6 }}
            >
              All-day usage without worrying about charging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3
              className="text-lg mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              ⚡ Fast Charging
            </h3>
            <p
              className="text-sm"
              style={{ color: "#6b7280", lineHeight: 1.6 }}
            >
              10 mins charge = 5 hours playback.
            </p>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3
              className="text-xl mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Specifications
            </h3>

            <ul
              className="space-y-3 text-sm"
              style={{ color: "#6b7280", lineHeight: 1.7 }}
            >
              <li>Bluetooth: 5.3</li>
              <li>Battery Life: 30 Hours</li>
              <li>Charging: USB-C Fast Charge</li>
              <li>Weight: 250g</li>
              <li>Range: 10 meters</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3
              className="text-xl mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Perfect For
            </h3>

            <ul
              className="space-y-3 text-sm"
              style={{ color: "#6b7280", lineHeight: 1.7 }}
            >
              <li>🎮 Gaming</li>
              <li>💻 Work & Meetings</li>
              <li>✈️ Travel</li>
              <li>🎵 Music Lovers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
