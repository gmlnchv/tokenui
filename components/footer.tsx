"use client";

import posthog from "posthog-js";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleGitHubClick = () => {
    // PostHog: Track when users click the GitHub link
    posthog.capture("github_link_clicked", {
      link_location: "footer",
      destination_url: "https://github.com/gmlnchv/token-ui",
    });
  };

  return (
    <footer className="border-t border-cararra-200/50 bg-cararra-50/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-cararra-500 text-sm">
            <p>&copy; {currentYear} Token UI. The Art of Documentation.</p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://github.com/gmlnchv/token-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cararra-500 hover:text-cararra-950 text-sm font-medium transition-colors"
              onClick={handleGitHubClick}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
