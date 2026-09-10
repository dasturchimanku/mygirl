import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlueRose } from "./BlueRose";

type LetterSceneProps = {
  onNext: () => void;
};

const LINES: { text: string; pause?: boolean; accent?: boolean }[] = [
  { text: "Oynura," },
  { text: "", pause: true },
  { text: "Kechagi vaziyat uchun uzr," },
  { text: "seni xafa qilish niyatim" },
  { text: "yo‘q edi." },
  { text: "", pause: true },
  { text: "Bilasan, men uchun qanchalik" },
  { text: "qadrli va maxsus insonligingni." },
  { text: "Sening kayfiyating yo‘q bo‘lsa," },
  { text: "menga ham tatimaydi." },
  { text: "", pause: true },
  { text: "Kel, arazlashib yurmaylik.", accent: true },
  { text: "Seni yaxshi ko‘raman! ❤️", accent: true },
];

export function LetterScene({ onNext }: LetterSceneProps) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const wait = LINES[visible].pause ? 300 : visible === 0 ? 450 : 430;
    const t = window.setTimeout(() => setVisible((v) => v + 1), wait);
    return () => window.clearTimeout(t);
  }, [visible]);

  const done = visible >= LINES.length;

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center px-5 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
    >
      <motion.div
        className="paper relative w-full max-w-sm overflow-hidden rounded-[4px] px-7 pb-8 pt-9"
        initial={{ rotateX: -80, opacity: 0, y: 40 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
        style={{ transformPerspective: 900, transformOrigin: "top center" }}
      >
        <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-sky-400/0 via-sky-500/50 to-sky-400/0" />

        <p className="mb-6 text-center font-serif text-[11px] uppercase tracking-[0.35em] text-sky-800/50">
          shaxsiy xat
        </p>

        <div className="min-h-[300px] font-hand text-[25px] leading-tight text-[#2c2416]">
          {LINES.map((line, i) => (
            <motion.p
              key={i}
              className={
                line.text === ""
                  ? "h-3"
                  : line.accent
                    ? "font-semibold text-[#d43b5e]"
                    : undefined
              }
              initial={{ opacity: 0, y: 6 }}
              animate={i < visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4 }}
            >
              {line.text || "\u00a0"}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={done ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        >
          <BlueRose className="h-16 w-14" />
        </motion.div>

        <motion.button
          type="button"
          onClick={onNext}
          className="mt-5 w-full rounded-full bg-[#1a3a6b] py-3.5 font-ui text-[15px] font-bold tracking-wide text-[#f7efe3] shadow-lg shadow-[#1a3a6b]/30"
          initial={{ opacity: 0, y: 12 }}
          animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.15 }}
          whileTap={{ scale: 0.97 }}
        >
          O‘qib bo‘ldim
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
