"use client";
import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import AltNavBar from "../components/AltNavBar";
import EmailButton from "../components/EmailButton";

export default function page() {
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
  let text: String = "";
  {
    isMobile
      ? (text = "Please email me")
      : (text =
          "The form is currently not taking submitions. Pleaes email me.");
  }
  return (
    <>
      <div className="fixed top-0 w-screen z-50">
        <AltNavBar isContactPage={true} />
      </div>

      {isMobile ? (
        <div className="w-screen h-screen bg-zinc-700"></div>
      ) : (
        <div className="w-sreen h-screen justify-center items-center bg-zinc-700 py-16 md:py-64">
          <Contact />;
        </div>
      )}

      <div className="flex flex-col absolute justify-center items-center top-24 w-screen  text-white text-2xl gap-10 text-center">
        {text}
        <EmailButton />
      </div>
    </>
  );
}
