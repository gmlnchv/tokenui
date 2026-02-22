"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

export function Installer({ packageName }: { packageName: string }) {
  const [pm, setPm] = useState<PackageManager>("npm");

  const PM_COMMANDS: Record<PackageManager, string> = {
    npm: `npx shadcn@latest add @tokenui/${packageName}`,
    pnpm: `pnpm dlx shadcn@latest add @tokenui/${packageName}`,
    yarn: `npx shadcn@latest add @tokenui/${packageName}`,
    bun: `bunx --bun shadcn@latest add @tokenui/${packageName}`,
  };

  const command = PM_COMMANDS[pm];

  const handleInstallCommandCopied = () => {
    // PostHog: Track when users copy the install command
    posthog.capture("installer_command_copied", {
      package_name: packageName,
      package_manager: pm,
      command: command,
    });
  };

  return (
    <div className="relative mt-6 rounded-xl border border-cararra-200 bg-white shadow-sm overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center gap-3 border-b border-cararra-100 bg-cararra-50/30 px-4 py-3">
        {/* Terminal Icon */}
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-cararra-800 font-mono text-[10px] font-bold text-white shadow-sm">
          &gt;_
        </div>

        {/* Tabs */}
        <div className="flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar">
          {packageManagers.map((manager) => (
            <button
              key={manager}
              onClick={() => setPm(manager)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                pm === manager
                  ? "bg-white text-cararra-950 border border-cararra-200 shadow-sm"
                  : "text-cararra-500 hover:text-cararra-900 border border-transparent",
              )}
            >
              {manager}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <div className="shrink-0">
          <CopyButton
            aria-label="Copy install command"
            value={command}
            variant="ghost"
            className="size-8 text-cararra-500 hover:text-cararra-950"
            onCopy={handleInstallCommandCopied}
          />
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-cararra-950">{command}</pre>
      </div>
    </div>
  );
}
