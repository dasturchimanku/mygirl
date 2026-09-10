import { useMemo, type CSSProperties } from "react";
import { images } from "../images";

type BackgroundProps = {
  dim?: boolean;
};

export function Background({ dim = false }: BackgroundProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 60,
        size: Math.random() * 2.4 + 1,
        delay: Math.random() * 3.5,
        dur: 2.2 + Math.random() * 2.6,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={images.bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff3e6]/10 via-transparent to-[#f7c9a8]/25" />

      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-white"
          style={
            {
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              "--delay": `${s.delay}s`,
              "--dur": `${s.dur}s`,
              boxShadow: "0 0 7px 2px rgba(255,255,255,0.65)",
            } as CSSProperties
          }
        />
      ))}

      {dim && <div className="absolute inset-0 bg-white/15" />}
    </div>
  );
}
