"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ALargeSmall, Layers, Ruler, Spline, Timer } from "lucide-react";

const TOKENS = [
  { type: "color", bg: "#3b82f6", tooltip: "colors.blue.500" },
  {
    type: "icon",
    value: ALargeSmall,
    bg: "#fafafa",
    tooltip: "typography.hero",
  },
  { type: "color", bg: "#10b981", tooltip: "colors.emerald.500" },
  { type: "icon", value: Ruler, bg: "#fafafa", tooltip: "spacing.xl" },
  { type: "color", bg: "#f59e0b", tooltip: "colors.amber.500" },
  { type: "icon", value: Spline, bg: "#fafafa", tooltip: "radius.md" },
  { type: "color", bg: "#ef4444", tooltip: "colors.red.500" },
  { type: "icon", value: Layers, bg: "#fafafa", tooltip: "elevation.high" },
  { type: "color", bg: "#8b5cf6", tooltip: "colors.violet.500" },
  { type: "icon", value: Timer, bg: "#fafafa", tooltip: "duration.fast" },
];

export function SingleTokenHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let clickTimeout: NodeJS.Timeout;
    let releaseTimeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOKENS.length);
      setIsClicked(false);

      clickTimeout = setTimeout(() => {
        setIsClicked(true);
      }, 1500);

      releaseTimeout = setTimeout(() => {
        setIsClicked(false);
      }, 3500);
    }, 4500);

    // initial trigger
    clickTimeout = setTimeout(() => setIsClicked(true), 1500);
    releaseTimeout = setTimeout(() => setIsClicked(false), 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(clickTimeout);
      clearTimeout(releaseTimeout);
    };
  }, []);

  const token = TOKENS[currentIndex];
  const isIcon = token.type === "icon";
  const IconComponent = isIcon ? token.value : null;

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Ripple Effects Container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border-[1.5px] border-cararra-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeOut",
              delay: 0,
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-[1.5px] border-cararra-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeOut",
              delay: 2, // Staggered ripple
            }}
          />
        </div>
      </div>

      {/* Floating Container */}
      <motion.div
        className="relative flex items-center justify-center z-10"
        animate={{
          y: [0, -16, 0], // Slightly larger float for bigger token
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          },
        }}
      >
        {/* Tooltip positioned nicely above */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[110%] pb-6 z-20 pointer-events-none">
          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="relative flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-cararra-950"
              >
                {/* A tiny inner glow for the tooltip glass */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-white/5 opacity-50 pointer-events-none" />
                <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                <span className="relative font-mono text-[15px] tracking-tight font-semibold mix-blend-color-burn">
                  {token.tooltip}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Pebble Container (handles the click/morph) */}
        <motion.div
          className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center cursor-default"
          animate={{
            backgroundColor: token.bg,
            scale: isClicked ? 0.94 : 1,
            y: isClicked ? 10 : 0,
            boxShadow: isClicked
              ? "0 15px 40px -15px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(0,0,0,0.15)"
              : "0 40px 80px -20px rgba(0,0,0,0.25), inset 0 2px 8px rgba(255,255,255,0.8), inset 0 -4px 12px rgba(0,0,0,0.2)",
          }}
          transition={{
            backgroundColor: { duration: 0.8, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 30 },
            y: { type: "spring", stiffness: 400, damping: 30 },
            boxShadow: { duration: 0.2 },
          }}
        >
          {/* Token inner rim to suggest physical coin/token */}
          <div className="absolute inset-[4%] md:inset-[5%] rounded-full border-[1.5px] md:border-2 border-white/20 mix-blend-overlay pointer-events-none shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),_inset_0_-2px_6px_rgba(0,0,0,0.3),_0_2px_4px_rgba(0,0,0,0.2)] z-10" />

          <AnimatePresence>
            {isIcon && IconComponent && (
              <motion.div
                key={`icon-${currentIndex}`}
                className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full z-20"
                style={{
                  color: "#d4d4d8",
                  filter:
                    "drop-shadow(0px -1px 1px #a1a1aa) drop-shadow(0px 1px 1px #ffffff)",
                }}
                initial={{ scale: 0, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 45, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 20,
                }}
              >
                <IconComponent
                  size={120}
                  strokeWidth={1.5}
                  className="md:w-40 md:h-40 md:stroke-[1.5]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glare / Polish reflection - made minimalistic */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none z-10 transition-opacity duration-300 mix-blend-screen"
            style={{ opacity: isClicked ? 0.3 : 0.8 }}
          >
            {/* Primary soft top highlight (minimalistic crescent) */}
            <div className="absolute top-[2%] left-[15%] w-[70%] h-[35%] bg-gradient-to-b from-white/80 to-transparent rounded-full opacity-90 blur-[2px] transform -rotate-[15deg] mix-blend-overlay" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
