import React from "react";
import Dropdown from "@/components/Dropdown";
import "./globals.css";

export const metadata = {
  title: "Token Deployer",
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/back.png" sizes="any" />
      </head>
      <body className="">
            <div className="container mx-auto lg:inline flex flex-col justify-center px-5 py-10 gap-5 items-center ">
              <Dropdown/>
            </div>
            {children}
      </body>
    </html>
  );
}
