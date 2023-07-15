import React from "react";
import "./globals.css";

export const metadata = {
  title: "Token Deployer ||",
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/back.png" sizes="any" />
      </head>
      <body className="">
        {children}
      </body>
    </html>
  );
}
