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

const ColorSwatchContext = React.createContext<{
  value: string;
  name?: string;
} | null>(null);

function useColorSwatch() {
  return React.useContext(ColorSwatchContext);
}

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
        <ColorSwatchContext.Provider value={{ value, name }}>
          {children}
        </ColorSwatchContext.Provider>
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

type ColorSwatchPartPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

type ColorSwatchPartProps = HTMLAttributes<HTMLDivElement> & {
  position?: ColorSwatchPartPosition;
};

const positionVariants: Record<ColorSwatchPartPosition, string> = {
  "top-left": "top-2 left-2 text-left",
  "top-right": "top-2 right-2 text-right",
  "bottom-left": "bottom-2 left-2 text-left",
  "bottom-right": "bottom-2 right-2 text-right",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
};

const ColorSwatchPart = React.forwardRef<HTMLDivElement, ColorSwatchPartProps>(
  (
    { className, position = "bottom-right", children, ...props },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "absolute flex flex-col p-1 text-sm font-medium",
          positionVariants[position],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ColorSwatchPart.displayName = "ColorSwatchPart";

export {
  ColorSwatch,
  useColorSwatch,
  ColorSwatchLabel,
  ColorSwatchPart,
  type ColorSwatchProps,
  type ColorSwatchLabelProps,
  type ColorSwatchPartProps,
};
