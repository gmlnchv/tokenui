import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-cararra-950" />
        <div className="absolute inset-[2px] rounded-full border border-white/20" />
        <div className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </div>
      <span className="font-serif text-xl font-medium tracking-tight text-cararra-950">
        Token UI
      </span>
    </div>
  );
}
