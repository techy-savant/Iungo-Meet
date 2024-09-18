import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="flex size-full flex-row gap-1 justify-center">
      <h2 className="flex flex-row justify-center items-center text-sm max-xs:text-[7px] lg:text-sm text-gray-2">
        <span className="pr-0.5">Built with </span>
        <HeartHandshake className="size-6 max-xs:size-4 text-green-1 pr-0.5" />
        <span className=" pr-0.5">By </span>
        <Link
          href="/"
          className="flex flex-row items-center gap-0.5 duration-200 ease-in group"
        >
          <span className="font-semibold text-white group-hover:underline">
            TechySavant
          </span>
          <Image
            src="icons/techysavant.svg"
            width={22}
            height={22}
            alt="Logo"
            className="size-6 max-xs:size-4"
          />
        </Link>
      </h2>
    </section>
  );
};

export default Footer;
