"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Dropdown = ({ onDataChange }) => {
  const [selectedRouter, setSelectedRouter] = useState("");
  const router = useRouter();
  const routes = [
    {
      id: 1,
      name: "BigEyes",
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
    const selectedRoute = e.target.value;
    setSelectedRouter(selectedRoute);
    if (selectedRoute === "BigEyes") {
      router.push("/");
    } else {
      router.push(selectedRoute);
    }
    console.log(e.target.value);
  };
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
      </div>
    </div>
  );
};

export default Dropdown;
