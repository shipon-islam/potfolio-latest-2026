import type { Project } from "@/lib/site";

// A "screenshot" for a project in the Work section, drawn as SVG rather than
// stored as a file. There are no project photos in /public, and eight fake
// screenshots would be a lot of weight to ship, so every project gets a small
// abstract mock-up instead: a browser frame whose contents change with the
// project type, and a colour pair picked from the order in lib/site.ts.
//
// Colours come from the theme tokens through Tailwind's `fill-*` utilities
// (`fill-panel`, `fill-line`, `fill-accent`…), so a mock-up follows the
// dark/light switch, and the gradient bands use plain hex on purpose: they sit
// behind white shapes and are meant to stay the same in both themes.
const palettes: Array<[string, string]> = [
  ["#0369A1", "#6A6FF2"],
  ["#0E7490", "#2563EB"],
  ["#6D28D9", "#DB2777"],
  ["#047857", "#0369A1"],
  ["#B45309", "#DC2626"],
  ["#1E40AF", "#0F766E"],
  ["#7C3AED", "#0EA5E9"],
  ["#0F766E", "#65A30D"],
];

// Bar widths for the "Personal" mock-up: a code editor with uneven lines.
const codeLines = [96, 132, 74, 150, 108, 64, 120, 88];

function Content({ type, id }: { type: Project["type"]; id: string }) {
  const band = `url(#${id}-band)`;

  if (type === "E-commerce") {
    return (
      <>
        <rect x="12" y="40" width="336" height="58" rx="10" fill={band} />
        <rect x="26" y="58" width="120" height="8" rx="4" fill="#fff" opacity="0.92" />
        <rect x="26" y="74" width="76" height="6" rx="3" fill="#fff" opacity="0.6" />
        <rect x="278" y="62" width="58" height="18" rx="9" fill="#fff" opacity="0.9" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${12 + i * 114} 110)`}>
            <rect width="108" height="86" rx="10" className="fill-panel2" />
            <rect
              x="8"
              y="8"
              width="92"
              height="42"
              rx="7"
              className="fill-line"
              opacity="0.8"
            />
            <rect
              x="8"
              y="58"
              width="64"
              height="7"
              rx="3.5"
              className="fill-muted"
              opacity="0.55"
            />
            <rect
              x="8"
              y="71"
              width="42"
              height="6"
              rx="3"
              className="fill-accent"
              opacity="0.75"
            />
          </g>
        ))}
      </>
    );
  }

  if (type === "Marketplace") {
    return (
      <>
        <rect x="12" y="40" width="88" height="156" rx="10" className="fill-panel2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x="22"
            y={54 + i * 26}
            width={i === 0 ? 68 : 58}
            height="10"
            rx="5"
            className={i === 0 ? "fill-accent" : "fill-line"}
            opacity={i === 0 ? 0.8 : 1}
          />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g
            key={i}
            transform={`translate(${110 + (i % 2) * 122} ${
              40 + Math.floor(i / 2) * 54
            })`}
          >
            <rect width="112" height="46" rx="9" className="fill-panel2" />
            <rect
              x="7"
              y="7"
              width="42"
              height="32"
              rx="6"
              className="fill-line"
              opacity="0.8"
            />
            <rect
              x="56"
              y="13"
              width="46"
              height="7"
              rx="3.5"
              className="fill-muted"
              opacity="0.5"
            />
            <rect
              x="56"
              y="26"
              width="34"
              height="6"
              rx="3"
              className="fill-accent"
              opacity="0.7"
            />
          </g>
        ))}
      </>
    );
  }

  if (type === "Business") {
    return (
      <>
        <rect x="12" y="40" width="336" height="72" rx="10" fill={band} />
        <rect x="84" y="60" width="192" height="10" rx="5" fill="#fff" opacity="0.92" />
        <rect x="118" y="78" width="124" height="7" rx="3.5" fill="#fff" opacity="0.6" />
        <rect x="152" y="124" width="56" height="20" rx="10" className="fill-accent" />
        {[0, 1].map((i) => (
          <g key={i} transform={`translate(${12 + i * 172} 158)`}>
            <rect width="164" height="50" rx="10" className="fill-panel2" />
            <rect
              x="10"
              y="12"
              width="90"
              height="7"
              rx="3.5"
              className="fill-muted"
              opacity="0.55"
            />
            <rect x="10" y="26" width="140" height="6" rx="3" className="fill-line" />
            <rect x="10" y="37" width="110" height="6" rx="3" className="fill-line" />
          </g>
        ))}
      </>
    );
  }

  if (type === "Community") {
    return (
      <>
        <rect x="12" y="40" width="336" height="38" rx="10" fill={band} />
        <rect x="26" y="55" width="112" height="8" rx="4" fill="#fff" opacity="0.9" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12 ${90 + i * 40})`}>
            <rect width="196" height="32" rx="8" className="fill-panel2" />
            <rect
              x="8"
              y="7"
              width="18"
              height="18"
              rx="5"
              className="fill-accent"
              opacity="0.8"
            />
            <rect
              x="34"
              y="9"
              width="120"
              height="6"
              rx="3"
              className="fill-muted"
              opacity="0.55"
            />
            <rect x="34" y="20" width="86" height="5" rx="2.5" className="fill-line" />
          </g>
        ))}
        <rect x="220" y="90" width="128" height="112" rx="10" className="fill-panel2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x="232"
              y={102 + i * 26}
              width="60"
              height="7"
              rx="3.5"
              className="fill-muted"
              opacity="0.5"
            />
            <rect
              x="322"
              y={102 + i * 26}
              width="14"
              height="7"
              rx="3.5"
              className="fill-accent"
              opacity="0.85"
            />
          </g>
        ))}
      </>
    );
  }

  // Personal: the portfolio itself, drawn as an editor next to a profile card.
  return (
    <>
      <rect x="12" y="40" width="336" height="168" rx="10" className="fill-panel2" />
      {codeLines.map((width, i) => (
        <g key={i}>
          <rect
            x="26"
            y={62 + i * 18}
            width="9"
            height="6"
            rx="3"
            className="fill-muted"
            opacity="0.35"
          />
          <rect
            x={46 + (i % 3) * 14}
            y={62 + i * 18}
            width={width}
            height="6"
            rx="3"
            className={i % 3 === 0 ? "fill-accent" : "fill-line"}
            opacity={i % 3 === 0 ? 0.85 : 1}
          />
        </g>
      ))}
      <rect x="222" y="62" width="114" height="130" rx="10" className="fill-panel" />
      <circle cx="279" cy="98" r="20" fill={band} />
      <rect
        x="243"
        y="128"
        width="72"
        height="7"
        rx="3.5"
        className="fill-muted"
        opacity="0.55"
      />
      <rect x="255" y="141" width="48" height="6" rx="3" className="fill-line" />
      <rect
        x="247"
        y="160"
        width="64"
        height="18"
        rx="9"
        className="fill-accent"
        opacity="0.9"
      />
    </>
  );
}

export default function ProjectShot({
  type,
  index,
  variant = "",
  className = "",
}: {
  type: Project["type"];
  index: number;
  // Adds a suffix to the gradient id, because the same project can be drawn
  // twice on one page (a row thumbnail and the larger panel).
  variant?: string;
  className?: string;
}) {
  const [from, to] = palettes[index % palettes.length];
  const id = `shot-${index}${variant ? `-${variant}` : ""}`;

  return (
    <svg
      viewBox="0 0 360 220"
      className={`shot block h-full w-full ${className}`.trim()}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-band`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>

      <rect width="360" height="220" rx="16" className="fill-panel" />
      <path
        d="M0 16a16 16 0 0 1 16-16h328a16 16 0 0 1 16 16v14H0z"
        className="fill-panel2"
      />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={16 + i * 14}
          cy="15"
          r="3.2"
          className="fill-muted"
          opacity="0.5"
        />
      ))}
      <rect x="60" y="9" width="150" height="12" rx="6" className="fill-line" opacity="0.9" />
      <circle cx="340" cy="15" r="4" className="fill-accent" opacity="0.85" />

      <Content type={type} id={id} />

      <rect
        x="0.5"
        y="0.5"
        width="359"
        height="219"
        rx="15.5"
        fill="none"
        className="stroke-line"
      />
    </svg>
  );
}