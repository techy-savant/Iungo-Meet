import { Metadata } from "next";
import React, { ReactNode } from "react";
import LandingNav from "@/components/LandingNav";

export const metadata: Metadata = {
  title: "Iungo Meet",
  description: "Video Conferencing Suite",
  icons: {
    icon: "/icons/iungo.svg",
  },
};

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <LandingNav />

      <section>{children}</section>

      {/* bg-main-gray-hero */}
    </main>
  );
};

export default LandingLayout;
