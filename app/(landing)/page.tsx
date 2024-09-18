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
      <section className="sm:px-16 px-8 py-12 bg-gray-2" id="about">
        <About />
      </section>

      <section className="sm:px-16 px-8 py-12 bg-white" id="features">
        <Features />
      </section>

      <section className="sm:px-16 px-8 py-16 bg-dark-3">
        <Pricing />
      </section>

      <section className="sm:px-16 px-8 py-12 bg-gray-2" id="faq">
        <Faq />
      </section>
      <section className="sm:px-16 px-8 py-5 bg-dark-3" id="footer">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
