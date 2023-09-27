"use client";
import React, { useState, useEffect } from "react";
import OppositeScroll from "../components/OppositeScroll";
import MobileProjects from "../components/MobileProjects";
import AltNavBar from "../components/AltNavBar";

export default function Home() {
  const [width, setWidth] = useState<number>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width! <= 768;
  return (
    <>
      <div className="absolute w-screen">
        <AltNavBar isContactPage={false} />
      </div>
      {isMobile ? (
        <div className="w-screen h-screen bg-black text-white flex justify-center items-center">
          This page does not work on mobile yet.
        </div>
      ) : (
        <OppositeScroll />
      )}
    </>
  );
}
