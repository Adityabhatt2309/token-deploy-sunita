"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BigEyes from "@/components/BigEyes";
import NewCypherpunk from "./NewCypherpunk";
import Dejitarusuko from "./Dejitarusuko";
import Jeju from "./Jeju";
import Pepetoken from "./Pepetoken";

const Dropdown = ({ onDataChange }) => {
  const [selectedRouter, setSelectedRouter] = useState("BigEyesPage");
  const router = useRouter();
console.log(router)
  const routes = [
    {
      id: 1,
      name: "BigEyesPage",
    },
    {
      id: 2,
      name: "NeoCypherpunk",
    },
    {
      id: 3,
      name: "DejitaruTsuka",
    },
    {
      id: 4,
      name: "JEJU",
    },
    {
      id: 5,
      name: "PepeToken",
    },
  ];

  const changeHandler = (e) => {
    setSelectedRouter(e.target.value);
  };

  console.log(selectedRouter,"selectedRoute");
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <select
            className="lg:w-[500px] md:w-[350px] w-[280px] py-2 px-2 text-black "
            value={selectedRouter}
            onChange={changeHandler}
          >
            {routes.map((route) => (
              
              <option
                key={route.id}
                value={route.name}
                selected={selectedRouter === route.name}
              >
                {route.name}
              </option>
            ))}
          </select>
        </div>
          <div className="p-10 flex flex-col justify-center items-center ">
            { selectedRouter == "BigEyesPage"? <BigEyes/>:''}
            {selectedRouter == "NeoCypherpunk"? <NewCypherpunk/>:''}  
            {selectedRouter == "DejitaruTsuka"? <Dejitarusuko/>:''}  
            {selectedRouter == "JEJU"? <Jeju/>:''}  
            {selectedRouter == "PepeToken"? <Pepetoken/>:''} 
      </div>
      </div>
    </div>
  );
};

export default Dropdown;
