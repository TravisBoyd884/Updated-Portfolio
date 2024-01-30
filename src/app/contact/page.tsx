"use client";
import React from "react";
import Contact from "../components/Contact";
import AltNavBar from "../components/AltNavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Image
        className="absolute w-screen h-screen z-[-1] backdrop-grayscale overflow-hidden"
        src="/color.jpg"
        alt="background"
        width={1920}
        height={1080}
      />
      <div className="fixed top-0 w-screen z-50">
        <AltNavBar isContactPage={true} />
      </div>
      <div className="absolute w-screen h-screen flex justify-center items-center ">
        <Contact />;
      </div>

      <Footer />
    </>
  );
}
