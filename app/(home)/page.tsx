import { Metadata } from "next";
import { Home } from "./home-client";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Home />;
}
