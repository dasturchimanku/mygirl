import { useState } from "react";
import { motion } from "framer-motion";

type EnvelopeSceneProps = {
  onOpen: () => void;
  onBegin?: () => void;
};

export function EnvelopeScene({ onOpen, onBegin }: EnvelopeSceneProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onBegin?.();
    window.setTimeout(onOpen, 1300);
  };

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none absolute -right-6 -top-4 h-36 w-36 rounded-full bg-gradient-to-br from-[#fff4dd] to-[#ffd8a8] shadow-[0_0_90px_36px_rgba(255,214,150,0.5)]" />

      <motion.p
        className="mb-1 font-serif text-lg italic text-[#7a3b2e] drop-shadow-[0_1px_6px_rgba(255,255,255,0.6)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        tong otdi, xayrli tong
      </motion.p>

      <motion.h1
        className="font-serif text-5xl font-semibold tracking-wide text-[#b23a5b] drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        Oynura
      </motion.h1>

      <motion.p
        className="mt-3 text-center font-ui text-sm font-semibold tracking-wide text-[#7a3b2e]/90 drop-shadow-[0_1px_5px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        Senga xat keldi
      </motion.p>

      <span className="pointer-events-none absolute left-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_8px_white]" />
      <span className="pointer-events-none absolute right-[22%] top-[44%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_6px_white]" />
      <span className="pointer-events-none absolute left-[28%] top-[58%] h-1 w-1 rounded-full bg-sky-200/80 shadow-[0_0_8px_#bfdbfe]" />

      <motion.button
        type="button"
        onClick={handleOpen}
        className="relative mt-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40, scale: 0.86 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 160, damping: 16 }}
        aria-label="Xatni ochish"
      >
        {!opening && (
          <>
            <span className="pulse-ring absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/40" />
            <span
              className="pulse-ring absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/25"
              style={{ animationDelay: "0.7s" }}
            />
          </>
        )}

        <div className={opening ? "" : "floaty"}>
          <Envelope opening={opening} />
        </div>

        <motion.span
          className="mt-6 rounded-full bg-white/40 px-4 py-1.5 font-ui text-sm font-semibold text-[#7a3b2e] backdrop-blur-sm"
          animate={{ opacity: opening ? 0 : [0.55, 1, 0.55] }}
          transition={{ duration: 2, repeat: opening ? 0 : Infinity }}
        >
          xatni ochish uchun bos
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

function Envelope({ opening }: { opening: boolean }) {
  return (
    <div
      className="relative h-[172px] w-[262px]"
      style={{ perspective: 1100 }}
    >
      <div className="absolute inset-0 rounded-[6px] bg-[#e7d3a8] shadow-[0_22px_40px_rgba(0,0,0,0.45)]" />

      <motion.div
        className="absolute left-[14px] right-[14px] top-[18px] h-[148px] rounded-sm bg-[#fbf6eb] shadow-inner"
        initial={false}
        animate={
          opening
            ? { y: -86, opacity: 1 }
            : { y: 22, opacity: 1 }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: opening ? 0.28 : 0 }}
      >
        <div className="px-4 pt-3">
          <div className="h-1.5 w-16 rounded bg-sky-300/70" />
          <div className="mt-3 h-1 w-[88%] rounded bg-[#d7c7a4]/80" />
          <div className="mt-2 h-1 w-[70%] rounded bg-[#d7c7a4]/70" />
          <div className="mt-2 h-1 w-[78%] rounded bg-[#d7c7a4]/60" />
        </div>
      </motion.div>

      <div
        className="absolute inset-0 rounded-[6px] bg-gradient-to-b from-[#f6e7c7] to-[#e4cf9f]"
        style={{
          clipPath: "polygon(0 42%, 50% 72%, 100% 42%, 100% 100%, 0 100%)",
        }}
      />

      <motion.div
        className="absolute left-0 right-0 top-0 h-[118px] origin-top"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={opening ? { rotateX: 176 } : { rotateX: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#f3e2bc] to-[#e2c98e]"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />
        <div
          className="absolute inset-0 bg-[#d9c089]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[58px] z-10 flex h-[54px] w-[54px] -translate-x-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#5b90dc,#1e3f7a_72%)] shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
        initial={false}
        animate={
          opening
            ? { y: 90, x: 70, rotate: 110, opacity: 0, scale: 0.7 }
            : { y: 0, x: 0, rotate: 0, opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-100" fill="currentColor">
          <path d="M12 20s-6.2-3.9-8.6-7.4C1.6 10.2 2 6.8 4.7 5.5 6.8 4.5 9 5.4 12 8.2c3-2.8 5.2-3.7 7.3-2.7 2.7 1.3 3.1 4.7 1.3 7.1C18.2 16.1 12 20 12 20z" />
        </svg>
      </motion.div>
    </div>
  );
}
