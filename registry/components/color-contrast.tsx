"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useColorSwatch } from "./color-swatch";
import { Check, X } from "lucide-react";

/**
 * Utility to calculate WCAG 2.0 contrast ratio
 */
export function getLuminance(hex: string) {
  let cleanedHex = hex.replace(/^#/, "");
  if (cleanedHex.length === 3) {
    cleanedHex = cleanedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (cleanedHex.length !== 6) return 0;

  const r = parseInt(cleanedHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanedHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanedHex.substring(4, 6), 16) / 255;

  const toLinear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

export function getContrast(color1: string, color2: string) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  return (lightest + 0.05) / (darkest + 0.05);
}

type ContrastLevel = "AA" | "AAA" | "fail" | boolean;

type ColorContrastContextValue = {
  baseColor: string;
  againstColor: string;
  ratio: number | string;
  passes: ContrastLevel;
};

const ColorContrastContext =
  React.createContext<ColorContrastContextValue | null>(null);

export function useColorContrast() {
  return React.useContext(ColorContrastContext);
}

type ColorContrastProps = React.HTMLAttributes<HTMLDivElement> & {
  /** The color to check contrast against (often text color) */
  against: string;
  /** The underlying base color, automatically inferred if wrapped in ColorSwatch */
  base?: string;
  /** Custom ratio override, useful for specifying APCA variants where calculation isn't standard WCAG */
  ratio?: number | string;
  /** Manual override for pass/fail or AA/AAA level. Otherwise calculated automatically using WCAG normal text math */
  passes?: ContrastLevel;
};

const ColorContrast = React.forwardRef<HTMLDivElement, ColorContrastProps>(
  ({ base, against, ratio, passes, className, children, ...props }, ref) => {
    const swatch = useColorSwatch();
    // Default base color either from prop or from parent ColorSwatch context
    const baseColor = base || swatch?.value || "#000000";

    const calculatedRatio = React.useMemo(() => {
      if (ratio !== undefined) return ratio;
      return Math.round(getContrast(baseColor, against) * 10) / 10;
    }, [baseColor, against, ratio]);

    const calculatedPasses = React.useMemo(() => {
      if (passes !== undefined) return passes;
      if (typeof calculatedRatio === "number") {
        if (calculatedRatio >= 7) return "AAA";
        if (calculatedRatio >= 4.5) return "AA";
        // 3.0 is AA for large text, this assumes normal text for stricter validation
        return "fail";
      }
      return "fail";
    }, [calculatedRatio, passes]);

    return (
      <ColorContrastContext.Provider
        value={{
          baseColor,
          againstColor: against,
          ratio: calculatedRatio,
          passes: calculatedPasses,
        }}
      >
        <div
          ref={ref}
          className={cn("flex items-center gap-1.5 text-sm", className)}
          {...props}
        >
          {children}
        </div>
      </ColorContrastContext.Provider>
    );
  },
);
ColorContrast.displayName = "ColorContrast";

const ColorContrastRatio = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const context = useColorContrast();
  if (!context) return null;

  return (
    <span
      ref={ref}
      className={cn("font-mono font-medium", className)}
      {...props}
    >
      {typeof context.ratio === "number"
        ? `${context.ratio.toFixed(1)}:1`
        : context.ratio}
    </span>
  );
});
ColorContrastRatio.displayName = "ColorContrastRatio";

type ColorContrastBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** Visual variant of the badge, displaying raw icon or colored pill */
  variant?: "pill" | "icon";
};

const ColorContrastBadge = React.forwardRef<
  HTMLSpanElement,
  ColorContrastBadgeProps
>(({ className, variant = "pill", ...props }, ref) => {
  const context = useColorContrast();
  if (!context) return null;
  const { passes } = context;

  if (passes === "fail" || passes === false) {
    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        <X className="h-4 w-4 text-red-500" strokeWidth={3} />
      </span>
    );
  }

  if (variant === "icon" || passes === true) {
    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        <Check className="h-4 w-4 text-green-500" strokeWidth={3} />
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none tracking-wider text-white",
        passes === "AAA" ? "bg-green-600" : "bg-green-500",
        className,
      )}
      {...props}
    >
      {passes}
    </span>
  );
});
ColorContrastBadge.displayName = "ColorContrastBadge";

export {
  ColorContrast,
  ColorContrastRatio,
  ColorContrastBadge,
  type ColorContrastProps,
  type ColorContrastBadgeProps,
};
