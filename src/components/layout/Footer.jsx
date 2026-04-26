export default function Footer() {
  return (
    <footer
      className="bg-[#111] text-white py-12 mt-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* BRAND */}
        <h3
          className="text-2xl mb-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Waveon
        </h3>

        {/* DESCRIPTION */}
        <p
          className="text-sm mb-6"
          style={{
            color: "#9ca3af",
            lineHeight: 1.6,
          }}
        >
          Premium audio experiences crafted for modern users.
        </p>

        {/* LINKS */}
        <div className="flex gap-6 text-sm" style={{ color: "#9ca3af" }}>
          <span className="hover:text-white cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Contact
          </span>
        </div>

        {/* COPYRIGHT */}
        <p
          className="text-xs mt-8"
          style={{
            color: "#6b7280",
            letterSpacing: "0.02em",
          }}
        >
          © 2026 Waveon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
