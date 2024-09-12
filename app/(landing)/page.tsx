"use client";

import React from "react";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import LandingHome from "@/components/LandingHome";
import Pricing from "@/components/Pricing";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { toast } from "@/components/ui/use-toast";
import { title } from "process";

const LandingPage = () => {
  const router = useRouter();
  const { user, isSignedIn } = useUser();

  if (user && isSignedIn) {
    // toast({ title: "User is Signed In, Redirecting to Dashboard...", duration: 1000 });
    return router.push("/dashboard");
  }

  return (
    <>
      <section className=" sm:px-16 px-8 py-12 bg-white" id="home">
        <LandingHome />
      </section>
      <section className="padding bg-blue-200" id="about">
        <About />
      </section>

      <section className="padding bg-white" id="features">
        <Features />
      </section>

      <section className="padding bg-red-1" id="pricing">
        <Pricing />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full" id="fq">
        <Faq />
      </section>
      <section className="bg-[#2e2f33] padding-x sm:py-20 py-12 ">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
