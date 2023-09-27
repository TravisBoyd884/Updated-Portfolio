"use client";
/* import MultiBarParallax from "./components/MultiBarParallax"; */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bg from "../../public/sand.jpg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
/* import Contact from "./components/Contact"; */
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useRef } from "react";
import FancyContactButton from "./components/FancyContactButton";

export default function Home() {
  const parallaxRef = useRef<any>();
  return (
    <>
      <Parallax pages={3} ref={parallaxRef}>
        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          style={{
            zIndex: 0,
            height: 0,
          }}
          offset={0}
        >
          <NavBar parallaxRef={parallaxRef} />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0}
          style={{
            zIndex: -1,
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
          }}
          sticky={{ start: 0, end: 3 }}
        ></ParallaxLayer>
        <ParallaxLayer offset={0.1}>
          <Hero parallaxRef={parallaxRef} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2}>
          <div className="flex flex-col gap-72 horizontal justify-center items-center">
            <Projects />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="flex justify-center items-center flex-col gap-28"
          offset={2}
        >
          <FancyContactButton parallaxRef={parallaxRef} />
          <div className="w-fit bg-zinc-700 rounded-xl p-10">
            <FAQ />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="absolute z-[-1] w-screen h-3/4 bg-zinc-800"
          offset={1.5}
          sticky={{ start: 1.5, end: 3 }}
        ></ParallaxLayer>
        {/* <ParallaxLayer offset={1.9} sticky={{ start: 1.9, end: 2 }}> */}
        {/* <MultiBarParallax /> */}
        {/* </ParallaxLayer> */}
        <Footer></Footer>
      </Parallax>
    </>
  );
}
