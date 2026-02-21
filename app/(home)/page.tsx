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
import Image from "next/image";
import {
  ComponentRegistryBadge,
  BuiltForLogos,
} from "@/components/brand-badges";

export default function Home() {
  return (
    <div className="min-h-screen bg-cararra-50">
      {/* Hero Section */}
      <section className="pb-16 pt-24 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-10">
              <ComponentRegistryBadge />
            </div>

            <h1 className="font-serif text-3xl leading-[0.82] tracking-tight text-cararra-950 md:text-[5rem] text-balance">
              <span className="italic">The Art</span> of Design System
              Documentation.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed">
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
        </div>
      </section>

      {/* Painting + Browser Mockup Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Olive container holding the painting, with browser overlapping */}
        <div className="relative rounded-[2.5rem] bg-cararra-500 p-8 md:p-16 lg:p-24 overflow-hidden">
          {/* Painting as background of the olive container */}
          <div className="absolute inset-0 select-none">
            <Image
              src="/backgrounds/dutch-landscape-hires.png"
              alt="Dutch Golden Age Landscape"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>

          {/* Browser Mockup centered and narrower */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-cararra-300/50 bg-white shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center justify-between border-b border-cararra-200 bg-cararra-100 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                    <div className="h-3 w-3 rounded-full bg-cararra-300" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-md bg-cararra-50 px-16 py-1 text-xs text-cararra-400">
                    docs.acme.design/tokens/color
                  </div>
                </div>
                <div className="w-[52px]" />
              </div>

              {/* Browser Content */}
              <div className="min-h-[600px] p-8">
                <div className="mx-auto max-w-4xl">
                  <div className="mb-8">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-cararra-500">
                        Acme Design System
                      </span>
                    </div>
                    <h2 className="mb-2 font-serif text-3xl tracking-tight text-cararra-950">
                      Color Tokens
                    </h2>
                    <p className="text-cararra-600">
                      Color tokens represent the semantic color palette used
                      throughout the design system.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="mb-8 flex gap-4 border-b border-cararra-200">
                    <button
                      type="button"
                      className="border-b-2 border-cararra-950 px-1 pb-2 text-sm font-medium text-cararra-950"
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-cararra-400 hover:text-cararra-600"
                    >
                      Usage
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-cararra-400 hover:text-cararra-600"
                    >
                      Examples
                    </button>
                    <button
                      type="button"
                      className="border-b-2 border-transparent px-1 pb-2 text-sm font-medium text-cararra-400 hover:text-cararra-600"
                    >
                      API
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-3">
                      <ColorSwatch
                        value="#3b82f6"
                        className="h-20 w-full rounded-lg border border-cararra-200"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="rounded bg-white px-2 py-1 text-xs font-medium text-cararra-700">
                            #3b82f6
                          </span>
                        </div>
                      </ColorSwatch>
                      <ColorSwatch
                        value="#1e293b"
                        className="h-20 w-full rounded-lg border border-cararra-200"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="rounded bg-white px-2 py-1 text-xs font-medium text-cararra-700">
                            #1e293b
                          </span>
                        </div>
                      </ColorSwatch>
                      <ColorSwatch
                        value="#eff6ff"
                        className="h-20 w-full rounded-lg border border-cararra-200"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="rounded bg-white px-2 py-1 text-xs font-medium text-cararra-700">
                            #eff6ff
                          </span>
                        </div>
                      </ColorSwatch>
                    </div>

                    <ColorPalette
                      colors={[
                        "#dbeafe",
                        "#93c5fd",
                        "#60a5fa",
                        "#3b82f6",
                        "#2563eb",
                      ]}
                    />

                    <ColorPalette
                      colors={[
                        { name: "Success", value: "#10b981" },
                        { name: "Warning", value: "#f59e0b" },
                        { name: "Error", value: "#ef4444" },
                        { name: "Info", value: "#3b82f6" },
                      ]}
                    />

                    {/* Token Tables */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Spacing Table */}
                      <div className="rounded-lg border border-cararra-200">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-cararra-200 bg-cararra-50">
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Name
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <SpacingToken value="4px" name="spaceXSmall" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  4px
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <SpacingToken value="8px" name="spaceSmall" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  8px
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <SpacingToken value="16px" name="spaceMedium" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  16px
                                </code>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm">
                                <SpacingToken value="24px" name="spaceLarge" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  24px
                                </code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Border Radius Table */}
                      <div className="rounded-lg border border-cararra-200">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-cararra-200 bg-cararra-50">
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Name
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <NumberToken value="0" name="radiusNone" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  0
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <NumberToken value="4px" name="radiusSmall" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  4px
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <NumberToken value="8px" name="radiusMedium" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  8px
                                </code>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm">
                                <NumberToken value="12px" name="radiusLarge" />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  12px
                                </code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Typography Table */}
                      <div className="rounded-lg border border-cararra-200">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-cararra-200 bg-cararra-50">
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Name
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <TypographyToken
                                  value="14px"
                                  name="fontSizeSmall"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  14px
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <TypographyToken
                                  value="16px"
                                  name="fontSizeMedium"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  16px
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <TypographyToken
                                  value="18px"
                                  name="fontSizeLarge"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  18px
                                </code>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm">
                                <TypographyToken
                                  value="24px"
                                  name="fontSizeXLarge"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  24px
                                </code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Color Tokens Table */}
                      <div className="rounded-lg border border-cararra-200">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-cararra-200 bg-cararra-50">
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Name
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-cararra-600">
                                Value
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <ColorToken
                                  value="#3b82f6"
                                  name="primaryBlue"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  #3b82f6
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <ColorToken
                                  value="#1e293b"
                                  name="primaryDark"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  #1e293b
                                </code>
                              </td>
                            </tr>
                            <tr className="border-b border-cararra-200">
                              <td className="px-4 py-2 text-sm">
                                <ColorToken
                                  value="#10b981"
                                  name="successGreen"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  #10b981
                                </code>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm">
                                <ColorToken
                                  value="#f59e0b"
                                  name="warningAmber"
                                />
                              </td>
                              <td className="px-4 py-2 text-sm">
                                <code className="rounded bg-cararra-100 px-1.5 py-0.5 font-mono text-xs text-cararra-700">
                                  #f59e0b
                                </code>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
