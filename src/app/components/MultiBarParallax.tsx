"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const MultiParallax = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start end"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const imageXSpring = useSpring(imageX);

  const sectionX = useTransform(scrollYProgress, [0, 1], [-96, 0]);
  const sectionXSpring = useSpring(sectionX);

  return (
    <section ref={targetRef} className="overflow-hidden">
      <motion.div style={{ x: sectionXSpring }} className="flex gap-2">
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1565382038303-8c62e88d119a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
          x={imageXSpring}
        />
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1610208956588-61f6c2e6136a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpb2xldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          x={imageXSpring}
        />
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1607707972895-7f994d8c2f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpb2xldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          x={imageXSpring}
        />
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1582542555601-6e6118762617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          x={imageXSpring}
        />
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1563700816155-1d613ba479f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZpb2xldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          x={imageXSpring}
        />
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1526500141527-9e9b0ae48227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZpb2xldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          x={imageXSpring}
        />
      </motion.div>
    </section>
  );
};

const ImageBar = ({ imgSrc, x }: { imgSrc: any; x: any }) => {
  return (
    <div className="w-1/3 lg:w-1/5 h-36 bg-slate-200 shrink-0 relative overflow-hidden">
      <motion.div
        className="absolute -inset-12"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          x,
        }}
      />
    </div>
  );
};

export default MultiParallax;
