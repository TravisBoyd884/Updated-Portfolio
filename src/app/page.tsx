"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import bg from "../../public/sand.jpg";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

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
          <div className="flex flex-col gap-72 horizontal">
            <Projects />
            <Contact />
          </div>
        </ParallaxLayer>

        <Footer></Footer>
      </Parallax>
    </>
  );
}
