import type { CSSProperties } from "react";

type HeartProps = {
  className?: string;
  style?: CSSProperties;
};

export function Heart({ className = "", style }: HeartProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M12.1 21.35l-1.1-1.01C5.14 15.24 2 12.39 2 8.9 2 6.24 4.24 4 6.9 4c1.54 0 3.04.74 4 1.9A5.13 5.13 0 0 1 14.9 4C17.56 4 19.8 6.24 19.8 8.9c0 3.49-3.14 6.34-8 11.44l-1.1 1.01z" />
    </svg>
  );
}
