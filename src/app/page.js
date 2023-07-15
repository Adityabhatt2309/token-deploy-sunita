"use client";
import React from "react";
import Dropdown from "@/components/Dropdown";

export default function Home() {

  //  const routes = [
  //   {
  //     id: 1,
  //     name: "BigEyes",
  //   },
  //   {
  //     id: 2,
  //     name: "NeoCypherpunk",
  //   },
  //   {
  //     id: 3,
  //     name: "DejitaruTsuka",
  //   },
  //   {
  //     id: 4,
  //     name: "JEJU",
  //   },
  //   {
  //     id: 5,
  //     name: "PepeToken",
  //   },
  // ];
  
  return (
    <main>
      <div className="container mx-auto lg:inline flex flex-col justify-center px-5 py-10 gap-5 items-center ">
          <Dropdown/>
       </div>
    </main>
  );
}
