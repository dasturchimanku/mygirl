import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Background } from "./components/Background";
import { EnvelopeScene } from "./components/EnvelopeScene";
import { LetterScene } from "./components/LetterScene";
import { RosesScene } from "./components/RosesScene";
import { QuestionScene } from "./components/QuestionScene";
import { ForgivenScene } from "./components/ForgivenScene";

type Stage = "intro" | "letter" | "roses" | "question" | "forgiven";

const YT_ID = "cNGjD0VG4R8";

export default function App() {
  const [stage, setStage] = useState<Stage>("intro");
  const [musicOn, setMusicOn] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#f7c9a8]">
      <Background dim={stage === "letter" || stage === "forgiven"} />

      {/* Qo'shiq xat ochilishi bilan boshlanadi va butun sayt davomida yangraydi */}
      {musicStarted && musicOn && (
        <iframe
          title="music"
          className="pointer-events-none absolute h-1 w-1 opacity-0"
          src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&loop=1&playlist=${YT_ID}&controls=0&rel=0&modestbranding=1`}
          allow="autoplay; encrypted-media"
        />
      )}

      {musicStarted && (
        <button
          type="button"
          onClick={() => setMusicOn((v) => !v)}
          className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-50 flex items-center gap-1.5 rounded-full border border-white/40 bg-white/25 px-3 py-1.5 font-ui text-xs font-bold text-white shadow backdrop-blur-md"
        >
          <span style={{ animation: musicOn ? "vinyl-spin 3s linear infinite" : undefined }}>
            🎵
          </span>
          {musicOn ? "musiqa yoqilgan" : "musiqa o‘chiq"}
        </button>
      )}

      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div key="intro" className="h-full w-full">
              <EnvelopeScene
                onBegin={() => setMusicStarted(true)}
                onOpen={() => setStage("letter")}
              />
            </motion.div>
          )}

          {stage === "letter" && (
            <motion.div key="letter" className="h-full w-full">
              <LetterScene onNext={() => setStage("roses")} />
            </motion.div>
          )}

          {stage === "roses" && (
            <motion.div key="roses" className="h-full w-full">
              <RosesScene onNext={() => setStage("question")} />
            </motion.div>
          )}

          {stage === "question" && (
            <motion.div key="question" className="h-full w-full">
              <QuestionScene onYes={() => setStage("forgiven")} />
            </motion.div>
          )}

          {stage === "forgiven" && (
            <motion.div key="forgiven" className="h-full w-full">
              <ForgivenScene />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
