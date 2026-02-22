"use client";

import { CodeIcon, EyeIcon } from "lucide-react";
import posthog from "posthog-js";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";

type PreviewProps = {
  children: ReactNode;
  code: string;
};

export function Preview({ children, code }: PreviewProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    highlightCode(code, "tsx").then(setHighlightedCode);
  }, [code]);

  const handleTabChange = (tab: "preview" | "code") => {
    setActiveTab(tab);
    // PostHog: Track when users switch between code and preview tabs
    posthog.capture("preview_tab_changed", {
      tab_selected: tab,
      code_length: code.length,
    });
  };

  const handleCodeCopied = () => {
    posthog.capture("preview_code_copied", {
      code_length: code.length,
    });
  };

  return (
    <div className="relative mt-6 mb-8 rounded-xl border border-cararra-200 bg-white shadow-sm overflow-hidden not-prose">
      {/* Top Bar */}
      <div className="flex items-center gap-3 border-b border-cararra-100 bg-cararra-50/30 px-4 py-3">
        {/* Tabs */}
        <div className="flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => handleTabChange("preview")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
              activeTab === "preview"
                ? "bg-white text-cararra-950 border border-cararra-200 shadow-sm"
                : "text-cararra-500 hover:text-cararra-900 border border-transparent",
            )}
          >
            <EyeIcon size={16} />
            Preview
          </button>
          <button
            onClick={() => handleTabChange("code")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
              activeTab === "code"
                ? "bg-white text-cararra-950 border border-cararra-200 shadow-sm"
                : "text-cararra-500 hover:text-cararra-900 border border-transparent",
            )}
          >
            <CodeIcon size={16} />
            Code
          </button>
        </div>

        {/* Copy Button (only visible on code block) */}
        {activeTab === "code" && (
          <div className="shrink-0">
            <CopyButton
              aria-label="Copy code"
              value={code}
              variant="ghost"
              className="size-8 text-cararra-500 hover:text-cararra-950"
              onCopy={handleCodeCopied}
            />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="bg-white">
        {activeTab === "preview" ? (
          <div className="overflow-y-auto p-8 flex flex-col items-center justify-center min-h-[200px] border-t-0">
            {children}
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[600px] overflow-x-auto text-sm">
            {highlightedCode ? (
              <figure
                data-rehype-pretty-code-figure
                className="m-0 !rounded-none !border-none max-w-full"
              >
                {/* biome-ignore lint/security/noDangerouslySetInnerHtml: highlighted code is safe */}
                <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
              </figure>
            ) : (
              <pre className="!bg-cararra-50/30 m-0 overflow-x-auto p-4">
                <code className="font-mono text-sm">{code}</code>
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
