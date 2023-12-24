"use client";
import { motion } from "framer-motion";
import { useState, useRef, Suspense } from "react";
import FBOCurl from "./FBOCurl";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import emailjs from "@emailjs/browser";

const ShiftingContactForm = () => {
  return (
    <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
      <Form />
      <Images />
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rrx3tj9",
        "template_jp8il5d",
        form.current,
        "RcoBEw7n6U0Q4hM5f",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    // Clear the form
    setFormData({ user_name: "", user_email: "", message: "" });

    // Alert the user
    alert("Your message was submitted!");
  };
  return (
    <>
      <Loader />
      <form
        ref={form}
        onSubmit={sendEmail}
        className={`p-8 w-full transition-colors duration-[750ms] ${"bg-white"} ${"text-white"}`}
      >
        <h3 className="text-4xl font-bold mb-6 text-black">Contact me</h3>

        {/* Name input */}
        <div className="mb-6">
          <p className={`text-2xl mb-2 ${"text-black"}`}>Name:</p>
          <input
            name="user_name"
            type="text"
            placeholder="Your name..."
            className={`${"bg-black"} transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0 border border-white border-solid outline-none`}
            value={formData.user_name}
            onChange={handleChange}
          />
          <p className={`text-2xl mb-2 pt-7 ${"text-white"}`}>Email:</p>
          <input
            name="user_email"
            type="text"
            placeholder="Your email..."
            className={`${"bg-black"} transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0 border border-white border-solid outline-none`}
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>

        {/* Info */}
        <div className="mb-6">
          <p className="text-2xl mb-2 text-black">Message:</p>
          <textarea
            name="message"
            placeholder="Your message..."
            className={`${"bg-black"} transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0 border border-solid border-white outline-none`}
            value={formData.message}
            onChange={handleChange}
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
          className={`${"bg-white text-black border-black"} transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold border border-solid`}
        >
          Submit
        </motion.button>
      </form>
    </>
  );
};

const Images = () => {
  const revealRef = useRef<any>();
  return (
    <div className="relative overflow-hidden w-full min-h-[100px] text-white bg-black">
      <motion.div
        ref={revealRef}
        initial="hidden"
        animate={"shown"}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 "
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={{
          hidden: { opacity: 0 },
          shown: { opacity: 1 },
        }}
      >
        <Canvas camera={{ position: [0, 0, 2.7] }}>
          <Suspense fallback={null}>
            <FBOCurl />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Loader />
      </motion.div>
    </div>
  );
};

export default ShiftingContactForm;
