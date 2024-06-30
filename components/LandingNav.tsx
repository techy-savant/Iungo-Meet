"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { landingNavLinks } from "@/constants";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import LandingMobileNav from "./LandingMobileNav";

const Navbar = () => {
  const router = useRouter();
  const clerk = useClerk();

  return (
    <nav className=" flex-between fixed z-50 w-full bg-white px-6 py-6 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="icons/iungo.svg"
          width={32}
          height={32}
          alt="Logo"
          className=" max-sm:size-10"
        />
        <p className="text-[26px] font-phonk font-extrabold text-dark-1  ">
          iungo
        </p>
      </Link>

      <ul className=" flex flex-center gap-3 max-sm:hidden">
        {landingNavLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-base text-gray-1 font-[300]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex-between gap-4">
        <Button
          className=" bg-transparent text-gray-1 px-0 max-sm:hidden"
          onClick={() => {
            clerk.redirectToSignIn();
          }}
        >
          Sign In
        </Button>
        <Button
          className=" bg-dark-3 text-white py-2 h-fit max-sm:hidden"
          onClick={() => {
            clerk.redirectToSignUp();
          }}
        >
          Get Started
        </Button>
        <LandingMobileNav  />
      </div>
    </nav>
  );
};

export default Navbar;
