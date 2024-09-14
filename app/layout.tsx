import type { Metadata } from "next";
import { Inter,Palanquin, Montserrat  } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const palanquin = Palanquin({ subsets: ["latin"], weight: ["400", "700"]});
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "Iungo Meet",
  description: "Video Conferencing Suite",
  icons: {
    icon: "/icons/iungo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/iungo2.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#31572c",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2 scroll-smooth`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
