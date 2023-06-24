"use client";
import BigEyes from "@/components/BigEyes";
import React from "react";

export default function Home() {
  
  return (
    <main>
      <div className="p-10 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold ">Big Eyes</h1>
          <BigEyes/>
      </div>
    </main>
  );
}
