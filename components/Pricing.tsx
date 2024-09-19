import { Send, HandHeart } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section
      className="flex size-full flex-row gap-1 justify-center"
      id="pricing"
    >
      <h2 className="  flex justify-center items-center align-center max-xs:flex-col text-sm lg:text-xl text-gray-2 uppercase ">
        <span className=" font-semibold text-white pr-2 ">
          What's the fee?{" "}
        </span>
        <div className="flex flex-row max-xs:text-[10px]">
          <span>There's none, because Iungo is 100% free</span>
          <HandHeart className="size-6 max-xs:size-4 text-green-1" />
        </div>
      </h2>
    </section>
  );
};

export default Pricing;
