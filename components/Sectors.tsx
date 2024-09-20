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
import Image from "next/image";
import { cn } from "@/lib/utils";
import { sectorsData } from "@/constants";

interface sectorsDataType {
  title: string;
  content: string;
  img: string;
}

const Sectors = () => {
  return (
    <section className="flex size-full flex-col sm:gap-2 items-center px-4">
      <h2 className="  flex justify-center align-center text-base text-center sm:text-2xl text-dark-1 font-semibold capitalize ">
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
          {sectorsData.map(({ title, content, img }: sectorsDataType) => (
            <CarouselItem
              key={title}
              className=" basis-[70%] sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="flex flex-col items-start m-4 border-none bg-gray-2 max-w-full min-h-[130px] lg:min-h-[180px] gap-1 p-2 mx-0">
                <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
                  <p className="text-sm sm:text-base font-bold leading-none max-lg:text-[12px]">
                    {title}
                  </p>
                </CardHeader>
                <CardContent className=" px-1 pt-2 sm:px-4 pb-3 flex flex-row items-center">
                  <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px] w-[65%] sm:w-[55%] ">
                    {content}
                  </p>
                  <div className=" flex-1 flex justify-end">
                    <Image
                      src={img}
                      width={22}
                      height={22}
                      alt="Logo"
                      className=" w-[60%] h-[60%] lg:w-[80%] lg:h-[80%]"
                    />
                  </div>
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
