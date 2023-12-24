"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AltNavBar from "./AltNavBar";

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className="fixed top-0 w-screen z-50">
        <AltNavBar isContactPage={false} />
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
};

const Content = ({ content }: { content: any }) => {
  return (
    <div className="w-full">
      {content.map(
        (
          { id, title, description }: { id: any; title: any; description: any },
          idx: any,
        ) => (
          <div
            key={id}
            className={`p-8 h-screen flex flex-col justify-between ${
              idx % 2 ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <h3
              className={`${id === 1 ? "pt-24" : "pt-8"} text-3xl font-medium`}
            >
              {title}
            </h3>
            <p className="font-light w-full max-w-md">{description}</p>
          </div>
        ),
      )}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: any;
  scrollYProgress: any;
}) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"],
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    title: "A stunning flash card app made with JavaFX",
    description: "",
    img: "/quickflip.jpg",
  },
  {
    id: 2,
    title: "Creating Flash Cards",
    description: "",
    img: "/qf1.jpg",
  },
  {
    id: 3,
    title: "Cards are saved to a local text file.",
    description: "",
    img: "/qf2.jpg",
  },
  {
    id: 4,
    title: "Quiz yourself!",
    description: "",
    img: "qf3.jpg",
  },
];
