"use client";

import type { HTMLAttributes } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Primitives for composable color palette components
 */

import {
  ColorSwatch,
  ColorSwatchLabel,
  type ColorSwatchProps,
  type ColorSwatchLabelProps,
} from "./color-swatch";

type ColorPaletteLabelProps = HTMLAttributes<HTMLDivElement>;

const ColorPaletteLabel = React.forwardRef<
  HTMLDivElement,
  ColorPaletteLabelProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={cn("text-sm font-medium", className)}
      {...props}
    >
      {children}
    </div>
  );
});

ColorPaletteLabel.displayName = "ColorPaletteLabel";

// ColorPalette - Convenience wrapper

type ColorStop = {
  name?: string;
  value: string;
};

type ColorPaletteProps = {
  /** Array of colors to display */
  colors: string[] | ColorStop[];
  /** Orientation of the palette (default: horizontal) */
  orientation?: "horizontal" | "vertical";
  /** Optional label */
  label?: string;
  /** Additional class name for the wrapper (label + palette stack) */
  className?: string;
};

/**
 * Mid-level color palette with labels shown by default.
 * Accepts color strings or `{ name, value }` objects.
 * Uses flex layout; switch to vertical via `orientation="vertical"`.
 * Compose your own container plus `ColorSwatch`/`ColorSwatchLabel` for custom layouts.
 */
function ColorPalette({
  colors,
  orientation = "horizontal",
  label,
  className,
}: ColorPaletteProps) {
  const colorStops: ColorStop[] = colors.map((color) =>
    typeof color === "string" ? { value: color } : color,
  );

  const orientationClass =
    orientation === "vertical" ? "flex-col h-64" : "flex-row h-20";

  return (
    <div className={cn("space-y-2", className)}>
      {label && <ColorPaletteLabel>{label}</ColorPaletteLabel>}
      <div
        className={cn(
          "flex overflow-hidden rounded-md border",
          orientationClass,
        )}
      >
        {colorStops.map((stop, index) => (
          <ColorSwatch
            key={`${stop.name || stop.value}-${index}`}
            value={stop.value}
            name={stop.name}
            className="hover:flex-[1.08] hover:opacity-95"
          >
            <ColorSwatchLabel>{stop.value}</ColorSwatchLabel>
          </ColorSwatch>
        ))}
      </div>
    </div>
  );
}

export {
  ColorPalette,
  ColorSwatch,
  ColorSwatchLabel,
  ColorPaletteLabel,
  type ColorPaletteProps,
  type ColorSwatchProps,
  type ColorSwatchLabelProps,
  type ColorPaletteLabelProps,
  type ColorStop,
};
