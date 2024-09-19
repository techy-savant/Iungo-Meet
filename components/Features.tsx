import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { useClerk } from "@clerk/nextjs";
import { featuresData } from "@/constants";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BellRing,
  CalendarClock,
  Clock6,
  Send,
  Video,
  LineChart,
  ShieldCheck,
  PieChart,
  FileText,
  MonitorUp,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface featureType {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

const Features = () => {
  const clerk = useClerk();
  return (
    <section className="flex size-full flex-col sm:gap-5 items-center mt-12 bg-white">
      <h2 className="  flex justify-center align-center text-base text-gray-1 uppercase mb-2">
        <p className=" capitalize pr-1 ">What </p>
        <div className=" pl-1 flex lowercase items-center gap-1">
          <Image
            src="icons/iungo.svg"
            width={26}
            height={26}
            alt="Logo"
            className=" max-sm:size-4"
          />
          <p className="text-[24px] max-sm:text-[16px] font-phonk font-extrabold text-dark-1">
            iungo
          </p>
        </div>
        <p className=" lowercase pl-1"> has to offer </p>
      </h2>

      <p className="text-center text-base sm:text-xl font-bold mb-8 max-w-[700px] ">
        Here are some of the amazing{" "}
        <span className=" text-green-1">features</span> we offer.
      </p>
      <div className=" grid grid-cols-2 sm:grid-cols-3 flex-wrap justify-center items-center w-full">
        {featuresData.map(
          ({ title, description, Icon, color }: featureType) => (
            <Card key={title} className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
              <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
                <div
                  className={cn(
                    " rounded-md p-3 border-2 border-dashed border-white bg-blue-1 opacity-[80%] flex justify-center  max-sm:items-center",
                    color && `${color}`
                  )}
                >
                  <Icon className="size-6" />
                </div>
                <p className="text-sm sm:text-base max-sm:text-center font-medium leading-none max-lg:text-[12px]">
                  {title}
                </p>
              </CardHeader>
              <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
                <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
                  {description}
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Features;
