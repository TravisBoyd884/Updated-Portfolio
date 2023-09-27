"use client";
import React, { useState, useEffect } from "react";
import OppositeScroll from "../components/OppositeScroll";
import MobileProjects from "../components/MobileProjects";
import AltNavBar from "../components/AltNavBar";

export default function Home() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <>
      <div className="absolute">
        <AltNavBar isContactPage={false} />
      </div>
      {isMobile ? <MobileProjects /> : <OppositeScroll />}
    </>
  );
}
