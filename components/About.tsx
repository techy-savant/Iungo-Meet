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
  FileText,
  PieChart,
  ShieldCheck,
  LucideIcon,
  Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { aboutsData } from "@/constants";
import { title } from "process";

interface aboutsType {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

const About = () => {
  const clerk = useClerk();
  return (
    <section className="flex size-full flex-col sm:gap-5 items-center mt-12">
      <h2 className="  flex justify-center align-center text-2xl text-gray-1 uppercase mb-4">
        <p className=" capitalize pr-1 ">What </p>
        <div className=" pl-1 flex lowercase items-center gap-1">
          <Image src="icons/iungo2.svg" width={35} height={35} alt="Logo" />
        </div>
        <p className=" lowercase pl-1"> is about </p>
      </h2>

      <div className=" flex gap-3 flex-wrap justify-center items-center w-full">
        {aboutsData.map(({ title, description, Icon, color }: aboutsType) => (
          <Card className="flex flex-col items-start m-4 max-sm:min-h-[80px] max-w-[180px] lg:max-w-[350px]  gap-1 p-2 border-none flex-1">
            <CardHeader className="flex flex-col gap-1 items-start px-4 pt-4 pb-0 ">
              <div
                className={cn(
                  " rounded-md p-3 bg-yellow-1 opacity-[80%] flex justify-center items-left", color && `${color}`
                )}
              >
                <PieChart className="size-5" />
              </div>
              <p className="text-sm sm:text-base font-medium leading-none ">
                Collaboration
              </p>
            </CardHeader>
            <CardContent className=" px-4 pt-0 pb-3">
              <p className="text-left text-sm max-lg:[10px] text-gray-1">
                Share screens, collaborate and get stuff done.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
