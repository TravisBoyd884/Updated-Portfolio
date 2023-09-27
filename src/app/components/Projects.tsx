import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <div>
      <div className="flex justify-center z-50">
        <div className="p-4 md:p-8 bg-black md:w-[50vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
            <Link href="/quickflip">
              <Card
                heading="Study"
                description="A flash card app created with JavaFX"
                imgSrc="/quickflip.jpg"
              />
            </Link>
            <Link href="https://code-type-pi.vercel.app/" target="_blank">
              <Card
                heading="Play"
                description="Created with react and typescript"
                imgSrc="/codetype.png"
              />
            </Link>
            <Link
              href=" https://github.com/TravisBoyd884/Chess"
              target="_blank"
            >
              <Card
                heading="Strategize"
                description="Built with C++ and SDL2"
                imgSrc="/chess.png"
              />
            </Link>
            <Card
              heading="Coming Soon"
              description=""
              imgSrc="/coming-soon.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
}: {
  heading: any;
  description: any;
  imgSrc: any;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l: any, i: any) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: any }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;
