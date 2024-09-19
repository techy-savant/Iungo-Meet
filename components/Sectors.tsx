import React from "react";
// import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-autoplay";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Sectors = () => {
  return (
    <section className="flex size-full flex-col sm:gap-2 items-center px-4">
      <h2 className="  flex justify-center align-center text-base sm:text-2xl text-dark-1 font-semibold capitalize ">
        Unifying Communication Across Sectors
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            delay: 2000,
          }),
        ]}
        className="w-full md:max-w-[800px] lg:max-w-[1000px] "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" basis-[70%] sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="flex flex-col items-start m-4 border-none bg-gray-2 max-w-full min-h-[130px] lg:min-h-[180px] gap-1 p-2 mx-0">
                <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
                  <p className="text-sm sm:text-base max-sm:text-center font-medium leading-none max-lg:text-[12px]">
                    Glory to ABBA
                  </p>
                </CardHeader>
                <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
                  <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
                    Praise be to Jehovah Nissi and Jehovah Jireh.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Sectors;
