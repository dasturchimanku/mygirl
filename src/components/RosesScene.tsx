import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlueRose } from "./BlueRose";

type RosesSceneProps = {
  onNext: () => void;
};

const ROSES = [
  {
    id: 1,
    left: "4%",
    top: "22%",
    rotate: -14,
    size: 132,
    phrase: "Seni sevaman",
  },
  {
    id: 2,
    left: "52%",
    top: "30%",
    rotate: 10,
    size: 144,
    phrase: "Boshqa xafa qilmayman",
  },
  {
    id: 3,
    left: "16%",
    top: "54%",
    rotate: -6,
    size: 128,
    phrase: "Sen yuragimdasan",
  },
];

export function RosesScene({ onNext }: RosesSceneProps) {
  const [picked, setPicked] = useState<number[]>([]);
  const allPicked = picked.length === ROSES.length;

  const pick = (id: number) => {
    setPicked((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <motion.div
      className="relative h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pointer-events-none absolute left-0 right-0 top-[max(1.5rem,env(safe-area-inset-top))] z-10 px-6 text-center">
        <motion.h2
          className="font-serif text-3xl font-semibold text-[#1a4f8a] drop-shadow-[0_1px_6px_rgba(255,255,255,0.7)]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ko‘k atirgullar
        </motion.h2>
        <p className="mt-2 inline-block rounded-full bg-white/50 px-3 py-1 font-ui text-sm font-semibold text-[#1a4f8a] backdrop-blur-sm">
          {allPicked ? "Hammasini ochding" : "Har birini bosib och"}
        </p>
      </div>

      {ROSES.map((rose, index) => {
        const isPicked = picked.includes(rose.id);
        return (
          <motion.button
            key={rose.id}
            type="button"
            onClick={() => pick(rose.id)}
            className="absolute z-20"
            style={{ left: rose.left, top: rose.top }}
            initial={{ opacity: 0, scale: 0.4, y: 24 }}
            animate={{ opacity: 1, scale: isPicked ? 1.08 : 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.18, type: "spring", stiffness: 140 }}
            whileTap={{ scale: 0.92 }}
          >
            <span
              className="sway block"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <span
                className="block"
                style={{
                  width: rose.size,
                  height: rose.size * 1.2,
                  transform: `rotate(${rose.rotate}deg)`,
                }}
              >
                <BlueRose glow={isPicked} className="h-full w-full" />
              </span>
            </span>

            <AnimatePresence>
              {isPicked && (
                <motion.span
                  className="absolute -top-2 left-1/2 z-30 w-max max-w-[200px] -translate-x-1/2 rounded-2xl bg-[#f7efe3] px-3 py-1.5 font-hand text-lg leading-tight text-[#1a3a6b] shadow-lg"
                  initial={{ opacity: 0, y: 8, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {rose.phrase}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}

      <AnimatePresence>
        {allPicked && (
          <motion.div
            className="absolute bottom-[max(1.8rem,env(safe-area-inset-bottom))] left-0 right-0 z-30 flex justify-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              onClick={onNext}
              className="w-full max-w-sm rounded-full bg-[#f7efe3] py-3.5 font-ui text-[15px] font-bold text-[#1a3a6b] shadow-xl"
              whileTap={{ scale: 0.97 }}
            >
              Davom etish
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
