// components/InsightSvg.tsx
export function InsightSvg() {
  return (
    <svg
      width="800"
      height="400"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Headline */}
      <text
        x="50%"
        y="20%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="32"
        fill="#000000"
        fontWeight="bold"
      >
        INSIGHT
      </text>

      {/* Subtitle */}
      <text
        x="50%"
        y="30%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="18"
        fill="#000000"
      >
        Unified Mobility Platform
      </text>

      {/* Path line */}
      <line
        x1="150"
        y1="200"
        x2="650"
        y2="200"
        stroke="#000000"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* Bus icon (rectangle) */}
      <rect
        x="140"
        y="180"
        width="20"
        height="20"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Car icon (rounded rectangle) */}
      <rect
        x="310"
        y="190"
        width="30"
        height="15"
        rx="5"
        ry="5"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Bike icon (circle + line) */}
      <circle
        cx="480"
        cy="200"
        r="8"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      />
      <line
        x1="480"
        y1="192"
        x2="480"
        y2="208"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Scooter icon */}
      <rect
        x="630"
        y="185"
        width="10"
        height="30"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Body text */}
      <text
        x="50%"
        y="70%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="14"
        fill="#000000"
        style={{ lineHeight: '1.4' }}
      >
        Experience door‑to‑door journey planning with access to
      </text>
      <text
        x="50%"
        y="76%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="14"
        fill="#000000"
        style={{ lineHeight: '1.4' }}
      >
        public transport, ride‑hailing, car sharing, micro‑mobility,
      </text>
      <text
        x="50%"
        y="82%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="14"
        fill="#000000"
        style={{ lineHeight: '1.4' }}
      >
        and chauffeur services—all in one place.
      </text>
    </svg>
  )
}