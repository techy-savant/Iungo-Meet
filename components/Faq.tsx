import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants";

interface faqDataType {
  sn: number;
  question: string;
  answer: string;
}

const Faq = () => {
  return (
    <section className="flex size-full flex-col sm:gap-2 items-center">
      <h2 className="  flex justify-center align-center text-base sm:text-2xl text-dark-1 font-semibold capitalize ">
        frequently asked questions
      </h2>
      <p className=" text-xs sm:text-base text-gray-1 text-center max-w-[450px] ">
        Have questions? We've got answers. You can find what you're looking for.
      </p>

      {faqData.map(({ sn, question, answer }: faqDataType) => (
        <Accordion
          key={sn}
          type="single"
          collapsible
          className="w-full max-w-[600px] mt-5 border-none"
        >
          <AccordionItem
            value="item-1"
            className=" border-none shadow-sm px-2 mb-2"
          >
            <AccordionTrigger className=" text-sm sm:text-base py-2 ">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-1 text-xs sm:text-sm ">
              {answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default Faq;
