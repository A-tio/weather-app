import React from "react";
import SearchBtn from "./SearchBtn";
import Banner from "./Banner";
import StatusCards from "./StatusCards";
import DailyCards from "./DailyCards";
import HourlyList from "./HourlyList";
import Dropdown from "./Dropdown";

export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <h1 className="!text-5xl !font-bold !tracking-wide !leading-normal">
          How's the sky looking today?
        </h1>
        <div className="mt-6" />
        <SearchBtn />
        <div className="mt-8" />
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col w-full gap-8  h-full">
            <Banner />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatusCards title="Feels like" value="19" />
              <StatusCards title="Feels like" value="19" />
              <StatusCards title="Feels like" value="19" />
              <StatusCards title="Feels like" value="19" />
            </div>

            <div className="flex items-start flex-col gap-4">
              Daily forecast
              <div className="grid grid-cols-3 md:grids-cols-4 lg:grid-cols-7 gap-4">
                <DailyCards />
                <DailyCards />
                <DailyCards />
                <DailyCards />
                <DailyCards />
                <DailyCards />
                <DailyCards />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 bg-btncolor p-4 rounded-lg items-start">
            <div className="flex flex-row justify-between w-full">
              <p className="font-semibold">Hourly Forecast</p>
              <Dropdown type="date-dropdown" />
            </div>
            <HourlyList />
            <HourlyList />
            <HourlyList />
            <HourlyList />
            <HourlyList />

            <HourlyList />
            <HourlyList />
            <HourlyList />
            <HourlyList />
            <HourlyList />
          </div>
        </div>
      </div>
    </>
  );
}
