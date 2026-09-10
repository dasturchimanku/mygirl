import { useState, type SyntheticEvent } from "react";
import { motion } from "framer-motion";
import { RoseBouquet } from "./BlueRose";

type QuestionSceneProps = {
  onYes: () => void;
};

export function QuestionScene({ onYes }: QuestionSceneProps) {
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [jumps, setJumps] = useState(0);

  const flee = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const btnW = 96;
    const btnH = 48;
    const pad = 18;
    const x = pad + Math.random() * (window.innerWidth - btnW - pad * 2);
    const y = pad + Math.random() * (window.innerHeight - btnH - pad * 2 - 24);

    setNoPos({ x, y });
    setJumps((n) => n + 1);
  };

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
    >
      <motion.div
        className="mb-2 h-36 w-40"
        initial={{ opacity: 0, scale: 0.7, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <RoseBouquet className="h-full w-full" />
      </motion.div>

      <motion.h2
        className="text-center font-serif text-[2.1rem] font-semibold leading-tight text-[#1a4f8a] drop-shadow-[0_1px_8px_rgba(255,255,255,0.75)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Oynura,
        <br />
        meni kechira olasanmi?
      </motion.h2>

      <div className="relative mt-10 flex w-full max-w-xs flex-col items-center gap-4">
        <motion.button
          type="button"
          onClick={onYes}
          className="z-20 w-full rounded-full bg-gradient-to-b from-sky-300 to-blue-500 py-4 font-ui text-[17px] font-extrabold text-white shadow-[0_10px_30px_rgba(59,130,246,0.45)]"
          whileTap={{ scale: 0.97 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          Kelishdik! 😉
        </motion.button>

        <motion.button
          type="button"
          onPointerDown={flee}
          onMouseEnter={flee}
          onClick={(e) => e.preventDefault()}
          className={`rounded-full border-2 border-[#d43b5e] bg-white px-8 py-3.5 font-ui text-base font-bold text-[#d43b5e] shadow-lg ${
            jumps > 6 ? "opacity-80" : ""
          }`}
          style={
            noPos
              ? {
                  position: "fixed",
                  left: noPos.x,
                  top: noPos.y,
                  zIndex: 40,
                  margin: 0,
                  touchAction: "none",
                }
              : { position: "relative", touchAction: "none" }
          }
          animate={
            noPos
              ? { left: noPos.x, top: noPos.y }
              : { rotate: [-3, 3, -3] }
          }
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
        >
          Yo‘q 🥺
        </motion.button>
      </div>
    </motion.div>
  );
}
