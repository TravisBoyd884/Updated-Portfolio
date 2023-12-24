import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const BasicFAQ = () => {
  return (
    <div className="px-4">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-center text-3xl font-semibold mb-4 text-white border-b-[3px] border-solid border-white pb-10 ">
          Frequently asked questions
        </h3>
        <Question title="Relevant Course Work" defaultOpen={false}>
          <p className="leading-relaxed">
            Data Structures & Algorithms, Intro to Networks, Object Oriented
            Programming, Intro to C Programming and Unix, Discrete Math, Linear
            Algebra.
          </p>
        </Question>
        <Question title="Languages" defaultOpen={false}>
          <p>C/C++, Python, JavaScript, TypeScript, Java, HTML, CSS.</p>
        </Question>
        <Question title="Cloud/Databases" defaultOpen={false}>
          <p>MongoDb, Firebase, Relational Database(mySql).</p>
        </Question>
        <Question title="Areas of Interest" defaultOpen={false}>
          <p>
            Web Design and Development, Computer Graphics, Artificial
            Intelligence, Machine Learning.
          </p>
        </Question>
        <Question title="How did you make this website?" defaultOpen={false}>
          <p>
            Next.js, Tailwind, Three.js, react-spring, framer-motion, and
            Vercel.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen,
}: {
  title: any;
  children: any;
  defaultOpen: any;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-black border-solid"
    >
      <button
        onClick={() => setOpen((pv: any) => !pv)}
        className="py-6 w-full flex items-center justify-between gap-4"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(255, 255, 255, 0)",
            },
            closed: {
              color: "rgba(255, 255, 255, 1)",
            },
          }}
          className="text-lg font-medium text-left bg-gradient-to-r from-slate-400 to-white bg-clip-text"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(255 255 255)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "fit-content" : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-white"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;
