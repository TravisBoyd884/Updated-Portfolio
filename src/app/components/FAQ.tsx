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
        <Question title="Can I have your resume?" defaultOpen>
          <p>Sure. Email me.</p>
        </Question>
        <Question
          title="Why did the chicken cross the road?"
          defaultOpen={false}
        >
          <p>To get away from angular.</p>
        </Question>
        <Question title="How did you make this website?" defaultOpen={false}>
          <p>
            Next.js, Tailwind, Three.js, react-spring, framer-motion, and
            Vercel.
          </p>
        </Question>
        <Question title="Tabs or Spaces" defaultOpen={false}>
          <p>Tabs.</p>
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
