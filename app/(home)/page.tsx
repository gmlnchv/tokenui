"use client";

import { ColorPalette, ColorSwatch } from "@/registry/components/color-palette";
import { SpacingToken } from "@/registry/components/spacing-token";
import { TypographyToken } from "@/registry/components/typography-token";
import { CTAButton } from "@/components/cta-button";
import {
  ComponentRegistryBadge,
  BuiltForLogos,
} from "@/components/brand-badges";
import { SingleTokenHero } from "@/components/single-token-hero";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SHOWCASE_ITEMS = [
  {
    id: "color",
    url: "docs.acme.design/tokens/color",
    content: (
      <div className="space-y-8 h-full flex flex-col justify-center">
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ColorSwatch
              value="#3b82f6"
              className="h-24 w-full rounded-xl border border-cararra-200 shadow-sm"
            >
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-t border-cararra-100 rounded-b-xl">
                <div className="w-16 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-12 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
            </ColorSwatch>
            <ColorSwatch
              value="#1e293b"
              className="h-24 w-full rounded-xl border border-cararra-200 shadow-sm"
            >
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-t border-cararra-100 rounded-b-xl">
                <div className="w-16 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-12 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
            </ColorSwatch>
            <ColorSwatch
              value="#eff6ff"
              className="h-24 w-full rounded-xl border border-cararra-200 shadow-sm"
            >
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-white/90 backdrop-blur-sm border-t border-cararra-100 rounded-b-xl">
                <div className="w-16 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-12 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
            </ColorSwatch>
          </div>

          <div className="w-full h-12 rounded-lg bg-cararra-50 border border-cararra-200 flex items-center px-4 gap-4 mt-8">
            <div className="w-24 h-4 bg-cararra-200 rounded animate-pulse" />
            <div className="w-full h-px bg-cararra-200" />
          </div>

          <ColorPalette
            colors={["#dbeafe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb"]}
          />
        </div>
      </div>
    ),
  },
  {
    id: "spacing",
    url: "docs.acme.design/tokens/spacing",
    content: (
      <div className="space-y-6 h-full flex flex-col justify-center">
        <div className="rounded-xl border border-cararra-200 shadow-sm overflow-hidden bg-white">
          <div className="flex px-6 py-4 border-b border-cararra-100 bg-cararra-50/50">
            <div className="w-32 h-4 bg-cararra-200 rounded animate-pulse" />
            <div className="w-24 h-4 bg-cararra-200 rounded animate-pulse ml-auto" />
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-6 h-6 bg-cararra-200 rounded-full animate-pulse" />
                <div className="w-20 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <SpacingToken value="8px" name="spaceSmall" />
              </div>
            </div>
            <div className="w-full h-px bg-cararra-100" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-6 h-6 bg-cararra-200 rounded-full animate-pulse" />
                <div className="w-24 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <SpacingToken value="16px" name="spaceMedium" />
              </div>
            </div>
            <div className="w-full h-px bg-cararra-100" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-6 h-6 bg-cararra-200 rounded-full animate-pulse" />
                <div className="w-24 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <SpacingToken value="24px" name="spaceLarge" />
              </div>
            </div>
            <div className="w-full h-px bg-cararra-100" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-6 h-6 bg-cararra-200 rounded-full animate-pulse" />
                <div className="w-28 h-4 bg-cararra-200 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <SpacingToken value="32px" name="spaceXLarge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "typography",
    url: "docs.acme.design/tokens/typography",
    content: (
      <div className="space-y-6 h-full flex flex-col justify-center">
        <div className="rounded-xl border border-cararra-200 shadow-sm overflow-hidden bg-white">
          <div className="flex px-6 py-4 border-b border-cararra-100 bg-cararra-50/50">
            <div className="w-40 h-4 bg-cararra-200 rounded animate-pulse" />
            <div className="w-32 h-4 bg-cararra-200 rounded animate-pulse ml-auto" />
          </div>
          <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2 w-1/3">
                <div className="w-24 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-16 h-3 bg-cararra-100 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <TypographyToken value="16px" name="textBase" />
              </div>
            </div>
            <div className="w-full h-px bg-cararra-100" />
            <div className="flex items-center justify-between">
              <div className="space-y-2 w-1/3">
                <div className="w-28 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-20 h-3 bg-cararra-100 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <TypographyToken value="24px" name="textXLarge" />
              </div>
            </div>
            <div className="w-full h-px bg-cararra-100" />
            <div className="flex items-center justify-between">
              <div className="space-y-2 w-1/3">
                <div className="w-32 h-4 bg-cararra-200 rounded animate-pulse" />
                <div className="w-24 h-3 bg-cararra-100 rounded animate-pulse" />
              </div>
              <div className="w-2/3 flex justify-end">
                <TypographyToken value="36px" name="textDisplay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cararra-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 pb-12 pt-20 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text */}
            <div className="max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="mb-8 md:mb-10">
                <ComponentRegistryBadge />
              </div>

              <h1 className="font-serif text-4xl leading-[0.9] tracking-tight text-cararra-950 md:text-[5rem] text-balance">
                <span className="italic">The Art</span> of Design System
                Documentation.
              </h1>

              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed text-cararra-600 px-4 lg:px-0">
                Beautiful, interactive components for documenting your design
                tokens — crafted with the precision of a Dutch master.
              </p>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <CTAButton
                  href="/docs/components/token"
                  className="w-full sm:w-auto"
                >
                  Get Started
                </CTAButton>
              </div>

              <div className="mt-12 md:mt-16">
                <BuiltForLogos />
              </div>
            </div>

            {/* Right Column: Single Polished Token */}
            <div className="flex justify-center items-center h-full min-h-[300px] md:min-h-[400px]">
              <div className="scale-75 md:scale-100 transition-transform">
                <SingleTokenHero />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Mockup Section */}
      <section className="relative z-20 mx-auto max-w-6xl px-4 md:px-6 lg:px-8 -mt-4 md:-mt-16 mb-20 md:mb-0">
        <div className="relative group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cararra-200/20 via-cararra-100/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />

          <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-cararra-200/60 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12),0_16px_32px_-8px_rgba(0,0,0,0.08)]">
            {/* Browser Header */}
            <div className="flex items-center justify-between border-b border-cararra-100 bg-cararra-50/50 px-4 md:px-5 py-2 md:py-3">
              <div className="flex items-center gap-2 w-12 md:w-20">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cararra-200" />
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cararra-200" />
                  <div className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cararra-200" />
                </div>
              </div>

              <div className="flex items-center flex-1 justify-center max-w-[150px] md:max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeShowcase}
                    initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{
                      opacity: 0,
                      y: -4,
                      filter: "blur(4px)",
                      position: "absolute",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex justify-center"
                  >
                    <div className="w-full rounded-lg bg-white/80 border border-cararra-200/50 py-1 md:py-1.5 px-3 md:px-4 text-[9px] md:text-[11px] font-mono text-cararra-400 shadow-sm flex items-center justify-center gap-1.5 md:gap-2 backdrop-blur-sm truncate">
                      <svg
                        className="w-2.5 h-2.5 md:w-3 md:h-3 text-cararra-300 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="truncate">
                        {SHOWCASE_ITEMS[activeShowcase].url}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-12 md:w-20" />
            </div>

            {/* Browser Content */}
            <div className="h-[400px] md:h-[540px] p-6 md:p-10 bg-white flex flex-col relative overflow-hidden">
              <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col h-full">
                <div className="mb-6 md:mb-10 shrink-0">
                  <div className="mb-3 md:mb-4 flex items-center gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-cararra-400">
                      Documentation / Acme DS
                    </span>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="h-8 md:h-10 w-48 md:w-72 rounded-lg md:rounded-xl bg-gradient-to-r from-cararra-100 to-cararra-50 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-2.5 md:h-3 w-full max-w-lg rounded-full bg-cararra-50 animate-pulse" />
                      <div className="h-2.5 md:h-3 w-full max-w-md rounded-full bg-cararra-50/50 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="mb-8 md:mb-12 flex gap-4 md:gap-8 border-b border-cararra-100 shrink-0 overflow-x-auto no-scrollbar">
                  {["Overview", "Usage", "Guidelines", "API"].map((tab, i) => (
                    <div
                      key={tab}
                      className={`pb-3 md:pb-4 relative shrink-0 ${i === 0 ? "text-cararra-950" : "text-cararra-300"}`}
                    >
                      <div
                        className={`h-2.5 md:h-3 w-12 md:w-16 rounded bg-current ${i === 0 ? "opacity-20" : "opacity-10"} animate-pulse`}
                      />
                      {i === 0 && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-cararra-950"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 relative w-full h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeShowcase}
                      initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{
                        opacity: 0,
                        x: -20,
                        filter: "blur(10px)",
                        position: "absolute",
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <div className="scale-[0.85] md:scale-100 origin-top-left transition-transform">
                        {SHOWCASE_ITEMS[activeShowcase].content}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-20 md:h-32" />
    </div>
  );
}
