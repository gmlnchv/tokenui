"use client";

import type { HTMLAttributes } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

type ColorSwatchProps = HTMLAttributes<HTMLDivElement> & {
  /** Color value (hex, rgb, hsl, etc.) */
  value: string;
  /** Optional name/label for the color */
  name?: string;
};

const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ value, name, className, children, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "group relative flex-1 transition-all duration-200 ease-out",
          className,
        )}
        style={{ backgroundColor: value }}
        title={name || value}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ColorSwatch.displayName = "ColorSwatch";

type ColorSwatchLabelProps = HTMLAttributes<HTMLDivElement>;

const ColorSwatchLabel = React.forwardRef<
  HTMLDivElement,
  ColorSwatchLabelProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <div
      ref={forwardedRef}
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        "opacity-0 transition-opacity group-hover:opacity-100",
        className,
      )}
      {...props}
    >
      <div className="rounded bg-black/70 px-2 py-1 font-mono text-xs text-white shadow-sm">
        {children}
      </div>
    </div>
  );
});

ColorSwatchLabel.displayName = "ColorSwatchLabel";

export {
  ColorSwatch,
  ColorSwatchLabel,
  type ColorSwatchProps,
  type ColorSwatchLabelProps,
};
