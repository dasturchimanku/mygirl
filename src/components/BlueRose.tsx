import { useId } from "react";

type BlueRoseProps = {
  className?: string;
  glow?: boolean;
};

export function BlueRose({ className = "", glow = false }: BlueRoseProps) {
  const uid = useId().replace(/:/g, "");
  const g1 = `rp-${uid}`;
  const g2 = `rc-${uid}`;
  const g3 = `lf-${uid}`;

  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="none"
      aria-hidden
      style={
        glow
          ? { filter: "drop-shadow(0 0 14px rgba(125, 185, 255, 0.75))" }
          : { filter: "drop-shadow(0 10px 12px rgba(0,0,0,0.35))" }
      }
    >
      <defs>
        <linearGradient id={g1} x1="40" y1="20" x2="150" y2="130">
          <stop offset="0%" stopColor="#d7e9ff" />
          <stop offset="45%" stopColor="#6ea4e8" />
          <stop offset="100%" stopColor="#2a5aa8" />
        </linearGradient>
        <radialGradient id={g2} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f2f7ff" />
          <stop offset="55%" stopColor="#8fbfef" />
          <stop offset="100%" stopColor="#355fad" />
        </radialGradient>
        <linearGradient id={g3} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fce9a" />
          <stop offset="100%" stopColor="#2f6a43" />
        </linearGradient>
      </defs>

      <path
        d="M102 128 C98 168 108 200 100 228"
        stroke="#2f5a40"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M100 168 C72 158 48 172 44 190 C70 186 88 178 100 168Z"
        fill={`url(#${g3})`}
      />
      <path
        d="M102 152 C128 146 148 160 154 176 C130 174 114 164 102 152Z"
        fill={`url(#${g3})`}
      />

      <ellipse cx="68" cy="92" rx="34" ry="40" fill="#2e5a9e" transform="rotate(-38 68 92)" />
      <ellipse cx="134" cy="94" rx="34" ry="40" fill="#315fa8" transform="rotate(36 134 94)" />
      <ellipse cx="100" cy="108" rx="46" ry="36" fill="#3a6bb8" />
      <ellipse cx="78" cy="64" rx="30" ry="36" fill={`url(#${g1})`} transform="rotate(-24 78 64)" />
      <ellipse cx="124" cy="64" rx="30" ry="36" fill="#5b90dc" transform="rotate(22 124 64)" />
      <ellipse cx="100" cy="52" rx="28" ry="34" fill="#7aabeb" />
      <ellipse cx="88" cy="86" rx="24" ry="28" fill="#4d82d1" transform="rotate(-18 88 86)" />
      <ellipse cx="114" cy="86" rx="24" ry="28" fill="#6ea4e8" transform="rotate(16 114 86)" />
      <ellipse cx="100" cy="80" rx="22" ry="24" fill={`url(#${g2})`} />
      <ellipse cx="100" cy="84" rx="11" ry="13" fill="#cfe2fb" />
      <ellipse cx="100" cy="87" rx="4.5" ry="5.5" fill="#eef6ff" />
    </svg>
  );
}

export function RoseBouquet({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <BlueRose className="absolute left-0 top-6 h-full w-[46%] -rotate-[22deg]" />
      <BlueRose className="absolute left-[28%] top-0 h-full w-[50%] rotate-[4deg]" />
      <BlueRose className="absolute right-0 top-7 h-full w-[46%] rotate-[20deg]" />
    </div>
  );
}
