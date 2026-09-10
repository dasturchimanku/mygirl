import { useMemo, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { Heart } from "./Heart";
import { RoseBouquet } from "./BlueRose";

const HEART_COLORS = ["#9ecbff", "#7eb6ff", "#5b9cf0", "#c5e0ff", "#4a86e0"];

export function ForgivenScene() {
  const rain = useMemo(
    () =>
      Array.from({ length: 56 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5.5 + Math.random() * 5,
        size: 14 + Math.random() * 26,
        drift: `${(Math.random() - 0.5) * 90}px`,
        color: HEART_COLORS[i % HEART_COLORS.length],
        opacity: 0.45 + Math.random() * 0.5,
      })),
    [],
  );

  const fill = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 22 + Math.random() * 64,
        rot: (Math.random() - 0.5) * 40,
        color: HEART_COLORS[i % HEART_COLORS.length],
        opacity: 0.18 + Math.random() * 0.32,
      })),
    [],
  );

  const burst = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        const angle = (i / 34) * Math.PI * 2;
        const dist = 90 + (i % 5) * 42;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          size: 16 + (i % 4) * 8,
          color: HEART_COLORS[i % HEART_COLORS.length],
        };
      }),
    [],
  );

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {fill.map((h) => (
        <motion.span
          key={`f-${h.id}`}
          className="pointer-events-none absolute"
          style={{ left: `${h.left}%`, top: `${h.top}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: h.opacity }}
          transition={{ delay: 0.05 + (h.id % 12) * 0.04, type: "spring", stiffness: 180 }}
        >
          <Heart
            style={{
              width: h.size,
              height: h.size,
              color: h.color,
              transform: `rotate(${h.rot}deg)`,
            }}
          />
        </motion.span>
      ))}

      {rain.map((h) => (
        <span
          key={`r-${h.id}`}
          className="pointer-events-none absolute"
          style={
            {
              left: `${h.left}%`,
              bottom: "-40px",
              width: h.size,
              height: h.size,
              color: h.color,
              opacity: h.opacity,
              animation: `fall-heart ${h.duration}s linear ${h.delay}s infinite`,
              "--drift": h.drift,
            } as CSSProperties
          }
        >
          <Heart className="h-full w-full" />
        </span>
      ))}

      {burst.map((h) => (
        <motion.span
          key={`b-${h.id}`}
          className="pointer-events-none absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.2 }}
          animate={{ x: h.x, y: h.y, opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.35, ease: "easeOut" }}
        >
          <Heart style={{ width: h.size, height: h.size, color: h.color }} />
        </motion.span>
      ))}

      <motion.div
        className="pointer-events-none absolute"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: [1, 1.08, 1], opacity: 0.28 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-64 w-64 text-sky-300" />
      </motion.div>

      <motion.div
        className="relative z-10 mb-36 flex flex-col items-center text-center"
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.35, type: "spring", stiffness: 140 }}
      >
        <div className="mb-3 h-28 w-32">
          <RoseBouquet className="h-full w-full" />
        </div>
        <h2 className="max-w-[300px] font-serif text-4xl font-bold leading-tight text-[#1a6fd0] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
          Men Seni Yaxshi Ko‘raman!
        </h2>
        <p className="mt-4 max-w-[320px] rounded-2xl bg-white/70 px-4 py-3 font-ui text-base font-medium leading-snug text-[#2b3a55] shadow-sm backdrop-blur-sm">
          Nima bo‘lganda ham sen men uchun yagonasan. Va’da beraman, seni boshqa
          hech qachon xafa qilmayman! ✨
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-[max(1.6rem,env(safe-area-inset-bottom))] left-0 right-0 z-20 flex justify-center px-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 font-ui text-sm font-semibold text-white backdrop-blur-md">
          <span style={{ animation: "vinyl-spin 3s linear infinite" }}>🎵</span>
          Musiqa yangramoqda...
        </div>
      </motion.div>
    </motion.div>
  );
}
