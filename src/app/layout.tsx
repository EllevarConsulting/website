import React from "react";
import type { Metadata } from "next";
import { NavBar } from "@/_common/navbar";
import "./app.css";

export const metadata: Metadata = {
  title: "Ellevar",
  description: "Ellevar Consulting Website",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex flex-col">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
