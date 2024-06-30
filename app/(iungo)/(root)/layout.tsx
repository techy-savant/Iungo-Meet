import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Iungo Meet",
  description: "Video Conferencing Suite",
  icons:{
    icon: '/icons/iungo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </>
  );
};

export default RootLayout;
