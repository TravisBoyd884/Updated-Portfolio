import React from "react";
import Reveal from "./Reveal";
import Image from "next/image";
import FancyButton from "./FancyButton";

export default function Hero({ parallaxRef }) {
  return (
    <div className="flex md:gap-40 flex-col md:flex-row items-center">
      <div className="flex md:justify-start w-1/2 mt-20 md:mt-40 md:ml-36 flex-col font-sans text-white text-center md:text-left">
        <Reveal delay={0.3} inView={true}>
          <div>
            <h1 className="md:m-6 text-2xl md:text-6xl">Hi, my name is</h1>
            <h1 className="md:m-6 font-bold text-3xl md:text-8xl mb-10">
              Travis Boyd
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.6} inView={true}>
          <>
            <div className="md:ml-6 md:mb-3 md:mt-3 text-md md:text-2xl">
              I&apos;m a 19 year old sophomore at Oakland University.
            </div>
            <div className="md:ml-6 md:mb-10 text-md md:text-2xl w-full invisible md:visible">
              My interests are web development and artificial intelligence.
            </div>
            <div className="md:ml-6 md:visible invisible">
              <FancyButton parallaxRef={parallaxRef} />
            </div>
          </>
        </Reveal>
      </div>
      <div className="mt-28 md:mt-18 md:order-last order-first">
        <Reveal delay={0.9} inView={true}>
          <Image
            className="shadow-[0_0_0.5rem_0.3rem_#fff] max-w-[10rem] max-h-[11rem] md:max-w-[20rem] md:max-h-[20rem] relative md:top-24 md:m-20"
            src="/Selfie.jpeg"
            alt="Image of me"
            width={250}
            height={250}
          />
        </Reveal>
      </div>
    </div>
  );
}
