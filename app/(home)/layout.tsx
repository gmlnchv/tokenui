import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Logo } from "@/components/logo";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="home-layout">
      <HomeLayout
        nav={{
          title: <Logo />,
          url: "/",
        }}
        links={[
          {
            text: "Components",
            url: "/docs/components/token",
          },
        ]}
      >
        {children}
      </HomeLayout>
    </div>
  );
}
