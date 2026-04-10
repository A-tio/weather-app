import React from "react";
import SearchBtn from "./SearchBtn";
import Banner from "./Banner";

export default function Main() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="!text-5xl !font-bold !tracking-wide !leading-normal">
          How's the sky looking today?
        </h1>
        <div className="mt-6" />
        <SearchBtn />
        <div className="mt-16" />
        <div className="flex flex-row w-full">
          <Banner />
        </div>
      </div>
    </>
  );
}
