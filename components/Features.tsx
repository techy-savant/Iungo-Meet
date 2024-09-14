import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { useClerk } from "@clerk/nextjs";
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
} from "lucide-react";

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
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-blue-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <Send className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Instant Meetings
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Create and Launch meetings instantly with just single click.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-green-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <CalendarClock className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Schedule Meets
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Schedule meetings at a later date. And track all future meets.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-red-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <Video className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Record Meetings
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Record any meeting of your choice. Capture every detail.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-yellow-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <MonitorUp className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Share Screens
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Teamwork and collaboration have never been easier. Share screens,
              exchange ideas seamlessly, and enhance productivity.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-blue-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <LineChart className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Call Analytics
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Get detailed analytics on each call. Make better informed
              decisions with data.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-start m-4 border-none bg-gray-2 min-h-[200px] max-sm:min-h-[80px] max-lg:min-h-[60px] lg:max-w-[350px] max-sm:max-w-[180px] gap-1 p-2 flex-1">
          <CardHeader className="flex flex-col gap-1 items-center sm:items-start w-full px-1 sm:px-4 pt-4 pb-0 ">
            <div className=" rounded-md p-3 border-2 border-dashed border-white bg-green-1 opacity-[80%] flex justify-center  max-sm:items-center">
              <ShieldCheck className="size-6" />
            </div>
            <p className="text-sm sm:text-base font-medium leading-none max-lg:text-[12px]">
              Security & Encryption
            </p>
          </CardHeader>
          <CardContent className=" px-1 sm:px-4 pt-0 pb-3 max-sm:hidden">
            <p className="text-left text-sm max-lg:[10px] text-gray-1 max-lg:text-[10px]">
              Each call is secure and well-encrypted, ensuring your
              conversations remain private and protected.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
