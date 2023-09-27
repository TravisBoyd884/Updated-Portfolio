"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FBOCurl from "./FBOCurl";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ShiftingContactForm = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <section className="p-4">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form selected={selected} setSelected={setSelected} />
        <Images selected={selected} />
      </div>
    </section>
  );
};

const Form = ({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full transition-colors duration-[750ms] ${
        selected === "company" ? "bg-black" : "bg-white"
      } ${selected === "individual" ? "text-white" : "text-white"}`}
    >
      <h3 className="text-4xl font-bold mb-6 text-black">Contact me</h3>

      {/* Name input */}
      <div className="mb-6">
        <p
          className={`text-2xl mb-2 ${
            selected === "individual" ? "text-black" : "text-white"
          }`}
        >
          Hi! My name is...
        </p>
        <input
          type="text"
          placeholder="Your name..."
          className={`${
            selected === "company" ? "bg-black" : "bg-black"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0 border border-white border-solid outline-none`}
        />
      </div>

      {/* Company/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">and I represent...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Company name */}
      <AnimatePresence>
        {selected === "company" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">by the name of...</p>
            <input
              type="text"
              placeholder="Your company name..."
              className={`${
                selected === "company" ? "bg-black" : "bg-violet-700"
              } transition-colors duration-[750ms] border border-white border-solid placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I&apos;d love to ask about...</p>
        <textarea
          placeholder="Whatever your heart desires :)"
          className={`${
            selected === "company" ? "bg-black" : "bg-black"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0 border border-solid border-white outline-none`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "company"
            ? "bg-black text-white border-white"
            : "bg-white text-black border-black"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold border border-solid`}
      >
        Submit
      </motion.button>
    </form>
  );
};

const FormSelect = ({
  selected,
  setSelected,
}: {
  selected: any;
  setSelected: any;
}) => {
  return (
    <div className="border-[1px] rounded border-black overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-white" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">An individual</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-black z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "company" ? "text-black" : "text-black"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("company")}
      >
        <span className="relative z-10">A company</span>
        {selected === "company" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected }: { selected: any }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-black"
        style={{
          /* backgroundImage: */
          /*   "url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)", */
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Canvas camera={{ position: [0, 0, 2.7] }}>
          <FBOCurl />
        </Canvas>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          x: selected === "company" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-black"
        style={{
          /* backgroundImage: */
          /*   "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)", */
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Canvas camera={{ position: [0, 0, 2.7] }}>
          <FBOCurl />
          <OrbitControls />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default ShiftingContactForm;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };
