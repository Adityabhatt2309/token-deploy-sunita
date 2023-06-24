"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Dropdown = () => {
  const [selectedRouter, setSelectedRouter] = useState("");
  const router = useRouter();
  const routes = [
    {
      id: 1,
      name: "Bigeyes",
    },
    {
      id: 2,
      name: "NewCypherpunk",
    },
    {
      id: 3,
      name: "Dejitarusuko",
    },
    {
      id: 4,
      name: "Jeju",
    },
    {
      id: 5,
      name: "Pepetoken",
    },
  ];

  const changeHandler = (e) => {
    const selectedRoute = e.target.value;
    setSelectedRouter(selectedRoute);
    if (selectedRoute == "Bigeyes") {
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
