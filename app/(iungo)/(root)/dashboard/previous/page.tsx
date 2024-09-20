import CallList from "@/components/CallList";
import React from "react";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous</h1>

      <CallList type="ended" />
    </section>
  );
};

export default Previous;
