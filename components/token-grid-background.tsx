"use client";

import { useEffect, useState } from "react";
import {
  Type,
  Box,
  Layers,
  MousePointer2,
  Paintbrush,
  CircleDashed,
  Layout,
  Ruler,
  Sun,
} from "lucide-react";

// The data set for our floating design tokens
const TOKENS = [
  // Colors
  { type: "color", value: "#3b82f6" },
  { type: "color", value: "#10b981" },
  { type: "color", value: "#f59e0b" },
  { type: "color", value: "#ef4444" },
  { type: "color", value: "#8b5cf6" },
  { type: "color", value: "#ec4899" },
  { type: "color", value: "#1e293b" },
  { type: "color", value: "#ffffff", border: true },

  // Typography & Strings
  { type: "text", value: "Aa" },
  { type: "text", value: "T" },
  { type: "text", value: "14px" },
  { type: "text", value: "1.5" },
  { type: "text", value: "4px" },
  { type: "text", value: "500" },
  { type: "text", value: "rem" },
  { type: "text", value: "em" },

  // Iconography represents layout and shape tokens
  { type: "icon", value: Type },
  { type: "icon", value: Box },
  { type: "icon", value: Layers },
  { type: "icon", value: MousePointer2 },
  { type: "icon", value: Paintbrush },
  { type: "icon", value: CircleDashed },
  { type: "icon", value: Layout },
  { type: "icon", value: Ruler },
  { type: "icon", value: Sun },
];

function TokenPebble({ token, size = 64 }: { token: any; size?: number }) {
  const isColor = token.type === "color";
  const isText = token.type === "text";
  const isIcon = token.type === "icon";

  const content = isColor ? (
    <div
      className="w-full h-full rounded-full transition-all duration-500 group-hover:scale-105"
      style={{
        backgroundColor: token.value,
        ...(token.border && { border: "1px solid #e2e8f0" }),
      }}
    />
  ) : isText ? (
    <div className="w-full h-full rounded-full bg-white border border-cararra-200 flex items-center justify-center text-cararra-950 font-medium transition-all duration-500 group-hover:scale-105 group-hover:border-cararra-300">
      <span style={{ fontSize: size * 0.32 }}>{token.value}</span>
    </div>
  ) : isIcon ? (
    <div className="w-full h-full rounded-full bg-cararra-950 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-cararra-800 group-hover:scale-105">
      <token.value size={size * 0.4} />
    </div>
  ) : null;

  return (
    <div
      className="rounded-full flex-shrink-0 relative overflow-hidden group bg-white cursor-default"
      style={{
        width: size,
        height: size,
        boxShadow:
          "0 8px 24px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -4px 6px rgba(0,0,0,0.03)",
      }}
    >
      <div className="absolute inset-0 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
      {content}
    </div>
  );
}

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

function Column({
  speed,
  direction = "up",
  delay = 0,
  items,
}: {
  speed: number;
  direction?: "up" | "down";
  delay?: number;
  items: any[];
}) {
  // Triple the items so we can jump back to start smoothly (repeating)
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className="flex flex-col gap-6 md:gap-8 relative will-change-transform"
      style={{ width: "fit-content" }}
    >
      <div
        className="flex flex-col gap-6 md:gap-8 hover:[animation-play-state:paused] transition-all"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {displayItems.map((token, i) => {
          // Semi-randomized sizes based on index
          const size = 56 + (i % 3) * 20; // 56, 76, 96
          return <TokenPebble key={i} token={token} size={size} />;
        })}
      </div>
    </div>
  );
}

export function TokenGridBackground({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [cols, setCols] = useState<any[][]>([]);

  useEffect(() => {
    // Generate randomized columns client-side to prevent hydration mismatch
    const generated = Array.from({ length: 14 }).map(() =>
      shuffle(TOKENS).slice(0, 10),
    );
    setCols(generated);
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`absolute inset-0 ${className || ""}`} />;
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden flex justify-center gap-6 md:gap-8 ${className || ""}`}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
         @keyframes scroll-up {
           0% { transform: translateY(0); }
           100% { transform: translateY(-33.33%); } /* Since we tripled it, moving 33% loops it perfectly */
         }
         @keyframes scroll-down {
           0% { transform: translateY(-33.33%); }
           100% { transform: translateY(0); }
         }
       `,
        }}
      />

      <div className="absolute inset-0 flex justify-center gap-6 md:gap-8 rotate-[8deg] scale-[1.4] origin-center opacity-60">
        {cols.map((items, i) => {
          const direction = i % 2 === 0 ? "up" : "down";
          const speed = 40 + (i % 4) * 15;
          const delay = i * -5;
          return (
            <Column
              key={i}
              items={items}
              direction={direction as "up" | "down"}
              speed={speed}
              delay={delay}
            />
          );
        })}
      </div>
    </div>
  );
}
