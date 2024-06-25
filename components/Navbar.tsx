import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-6 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="icons/iungo.svg"
          width={32}
          height={32}
          alt="Logo"
          className=" max-sm:size-10"
        />
        <p className="text-[26px] font-phonk font-extrabold text-white  max-sm:hidden">
          iungo
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk User Management */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
