"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  const now = new Date();
  const { user } = useUser();
  const CapitalisedUserName = `${user?.username
    ?.charAt(0)
    .toUpperCase()}${user?.username?.slice(1)}`;

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="max-w-[270px] rounded py-2 text-lg font-medium lg:text-2xl">
            Welcome, <span className="text-sky-1">{CapitalisedUserName}</span>
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
