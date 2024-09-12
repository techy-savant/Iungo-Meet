"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { landingNavLinks, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";

const LandingMobileNav = () => {
  const clerk = useClerk();

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash); // Get the current window hash location
  }, []);

  const handleLinkClick = (hash: string) => {
    setCurrentHash(hash);
  };

  return (
    <section
      className="w-full max-w-[264px] 
    "
    >
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="icons/hamburger2.svg"
            width={36}
            height={36}
            alt="Hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="icons/iungo.svg"
              width={32}
              height={32}
              alt="Logo"
              className=" max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">iungo</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {landingNavLinks.map((link) => {
                  const isActive = currentHash === link.href;

                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full",
                          {
                            "bg-green-1": isActive,
                          }
                        )}
                        onClick={() => handleLinkClick(link.href)}
                      >
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <div className=" flex flex-wrap gap-2 m-4">
                  <Button
                    className="  flex-1  bg-dark-3 text-white rounded-lg text-base py-3 h-fit ease-in duration-75 hover:bg-green-1"
                    onClick={() => {
                      clerk.redirectToSignIn();
                    }}
                  >
                    Log Into Iungo
                  </Button>
                  <Button
                    className="  flex-1 bg-dark-3 text-white rounded-lg text-base py-3 h-fit ease-in duration-75 hover:bg-green-1"
                    onClick={() => {
                      clerk.redirectToSignUp();
                    }}
                  >
                    Get Started For Free
                  </Button>
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default LandingMobileNav;
