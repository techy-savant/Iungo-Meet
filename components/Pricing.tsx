import { Send, HandHeart } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section
      className="flex size-full flex-row gap-1 justify-center"
      id="pricing"
    >
      <h2 className="  flex justify-center items-center align-center text-sm max-xs:text-[7px] lg:text-xl text-gray-2 uppercase ">
        <span className=" font-semibold text-white pr-2 ">What's the fee? </span>
        There's none, because Iungo is 100% free
      </h2>
      <HandHeart className="size-6 max-xs:size-4 text-green-1" />
    </section>
  );
};

export default Pricing;
