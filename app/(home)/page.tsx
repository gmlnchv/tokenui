"use client";

import {
  ColorPalette,
  ColorSwatch,
  ColorSwatchLabel,
} from "@/registry/components/color-palette";
import { ColorToken } from "@/registry/components/color-token";
import { NumberToken } from "@/registry/components/number-token";
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
      <section className="relative z-10 pb-16 pt-24 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text */}
            <div className="max-w-3xl">
              <div className="mb-10">
                <ComponentRegistryBadge />
              </div>

              <h1 className="font-serif text-3xl leading-[0.82] tracking-tight text-cararra-950 md:text-[5rem] text-balance">
                <span className="italic">The Art</span> of Design System
                Documentation.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-cararra-600">
                Beautiful, interactive components for documenting your design
                tokens — crafted with the precision of a Dutch master.
              </p>

              <CTAButton href="/docs/components/token" className="mt-10">
                Get Started
              </CTAButton>

              <div className="mt-16">
                <BuiltForLogos />
              </div>
            </div>

            {/* Right Column: Single Polished Token */}
            <div className="flex justify-center items-center h-full min-h-[400px]">
              <SingleTokenHero />
            </div>
          </div>
        </div>
      </section>

      {/* Browser Mockup Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mt-12 md:mt-20">
        {/* Container holding the browser */}
        <div className="relative rounded-[2.5rem] bg-cararra-50/60 backdrop-blur-xl border border-cararra-200/80 p-3 md:p-5 lg:p-6 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-center">
          {/* Browser Mockup centered and narrower */}
          <div className="relative z-10 w-full max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-cararra-300/50 bg-white shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-cararra-200 bg-cararra-100 px-4 py-2.5">
                <div className="flex items-center gap-2 w-[52px]">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                  </div>
                </div>
                <div className="flex items-center flex-1 justify-center relative h-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeShowcase}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{
                        opacity: 0,
                        filter: "blur(4px)",
                        position: "absolute",
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      <div className="rounded-md bg-cararra-50 px-8 py-1 text-xs text-cararra-400 font-mono shadow-inner border border-cararra-200/50 bg-white/50 backdrop-blur-sm">
                        {SHOWCASE_ITEMS[activeShowcase].url}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="w-[52px]" />
              </div>

              {/* Browser Content */}
              <div className="h-[600px] p-8 bg-white flex flex-col relative overflow-hidden">
                <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col h-full">
                  <div className="mb-8 shrink-0">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-cararra-700">
                        Acme Design System
                      </span>
                    </div>
                    <div className="space-y-3 mt-6">
                      <div className="h-10 w-64 rounded-lg bg-cararra-200 animate-pulse" />
                      <div className="h-5 w-full max-w-md rounded-md bg-cararra-100 animate-pulse" />
                      <div className="h-5 w-full max-w-sm rounded-md bg-cararra-100 animate-pulse" />
                    </div>
                  </div>

                  {/* Navigation Skeleton */}
                  <div className="mb-10 flex gap-6 border-b border-cararra-200 pb-px shrink-0">
                    <div className="h-6 w-20 border-b-2 border-cararra-950 pb-2">
                      <div className="h-4 w-16 rounded bg-cararra-300 animate-pulse" />
                    </div>
                    <div className="h-6 w-16 pb-2">
                      <div className="h-4 w-14 rounded bg-cararra-200 animate-pulse" />
                    </div>
                    <div className="h-6 w-20 pb-2">
                      <div className="h-4 w-16 rounded bg-cararra-200 animate-pulse" />
                    </div>
                  </div>

                  {/* Content Area - Fluidly Changing */}
                  <div className="flex-1 relative w-full h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeShowcase}
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0"
                      >
                        {SHOWCASE_ITEMS[activeShowcase].content}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-24" />
    </div>
  );
}
