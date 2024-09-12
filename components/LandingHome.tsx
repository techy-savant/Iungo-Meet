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
} from "lucide-react";

const LandingHome = () => {
  const clerk = useClerk();
  return (
    <section className="flex size-full flex-col sm:gap-5 items-center mt-12 bg-white">
      <h2 className="  flex justify-center align-center text-base text-gray-1 uppercase mb-4">
        <p>The Power of</p>
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
      </h2>
      <p className="text-center text-base sm:text-2xl  font-bold mb-8 max-w-[700px] ">
        The ultimate software solution for your{" "}
        <span className=" text-green-1">video conferencing</span> and{" "}
        <span className="text-green-1">virtual meeting</span> needs.
      </p>
      <div className=" grid grid-cols-2 lg:grid-cols-4 justify-around w-full">
        <Card className="flex flex-col items-center m-4 max-sm:min-h-[80px]">
          <CardHeader className="flex flex-row gap-2 justify-center items-center max-sm:p-2">
            <Send className="size-4 mt-2" />

            <p className="text-sm sm:text-base font-medium leading-none max-sm:hidden">
              Create Instant Meetings
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-center max-sm:text-sm max-sm:hidden">
            Start video calls with one click.
            </p>
            <p className=" sm:hidden text-sm font-medium leading-none text-center">
              Create Instant Meetings
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center m-4 max-sm:h-fit">
          <CardHeader className="flex flex-row gap-2 justify-center items-center max-sm:p-2">
            <CalendarClock className="size-4 mt-2" />

            <p className="text-sm sm:text-base font-medium leading-none max-sm:hidden">
              Plan & Schedule Meets
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-center max-sm:text-sm max-sm:hidden">Schedule meetings with ease</p>
            <p className=" sm:hidden text-sm font-medium leading-none text-center">
              Plan & Schedule Meets
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center m-4  max-sm:min-h-[80px]">
          <CardHeader className="flex flex-row gap-2 justify-center items-center max-sm:p-2">
            <Video className="size-4 mt-2" />

            <p className="text-sm sm:text-base font-medium leading-none max-sm:hidden">
              Record Meetings
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-center max-sm:text-sm max-sm:hidden">
              Capture each meeting moment.
            </p>
            <p className=" sm:hidden text-sm font-medium leading-none text-center">
              Record Meetings
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center m-4  max-sm:min-h-[80px]">
          <CardHeader className="flex flex-row gap-2 justify-center items-center max-sm:p-2">
            <LineChart className="size-4 mt-2" />

            <p className="text-sm sm:text-base font-medium leading-none max-sm:hidden">
              Gather Meeting Insights
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-center max-sm:text-sm max-sm:hidden w-full">
            Track and analyze meeting data.
            </p>
            <p className=" sm:hidden text-sm font-medium leading-none text-center">
              Gather Meeting Insights
            </p>
          </CardContent>
        </Card>
        {/* <div className="flex flex-col items-center m-4">
          <span className=" text-2xl lg:text-4xl font-bold">1m</span>
          <p className="text-center max-sm:text-sm">
            Less than 1 minute to start a virtual space for teams
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <span className="text-2xl lg:text-4xl font-bold">25k</span>
          <p className="text-center max-sm:text-sm">
            Amazing remote virtual assistants for remote teams
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <span className="text-2xl lg:text-4xl font-bold">1:1</span>
          <p className="text-center max-sm:text-sm">
            All your meetings from 1:1s to standups to brainstorming
          </p>
        </div>
        <div className="flex flex-col items-center m-4">
          <span className="text-2xl lg:text-4xl font-bold">10x</span>
          <p className="text-center max-sm:text-sm">
            10x faster than sending a video conference link
          </p>
        </div> */}
      </div>
      <div className="w-full flex flex-wrap justify-center gap-2 m-4">
        <Button
          className=" w-[200px]   bg-dark-3 text-white rounded-lg text-base py-3 h-fit sm:hidden"
          onClick={() => {
            clerk.redirectToSignIn();
          }}
        >
          Log Into Iungo
        </Button>
        <Button
          className=" w-[200px]  sm:w-[300px] bg-dark-3 text-white rounded-lg text-base py-3 h-fit"
          onClick={() => {
            clerk.redirectToSignUp();
          }}
        >
          Get Started For Free
        </Button>
      </div>
    </section>
  );
};

export default LandingHome;
