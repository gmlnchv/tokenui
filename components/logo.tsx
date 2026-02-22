import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Outer Pebble */}
      <div
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#fafafa]"
        style={{
          boxShadow:
            "0 4px 10px -2px rgba(0,0,0,0.12), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 6px rgba(0,0,0,0.06)",
        }}
      >
        {/* Outer rim glare */}
        <div className="absolute inset-0 rounded-full pointer-events-none z-10 mix-blend-screen opacity-80 overflow-hidden">
          <div className="absolute top-[2%] left-[10%] w-[80%] h-[40%] bg-gradient-to-b from-white/90 to-transparent rounded-full blur-[0.5px] transform -rotate-[15deg]" />
        </div>
      </div>
      <span className="font-serif text-xl font-medium tracking-tight text-cararra-950">
        Token UI
      </span>
    </div>
  );
}
