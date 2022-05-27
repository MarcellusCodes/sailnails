import React from "react";
import { Container } from "./index";
import Image from "next/image";
import { motion } from "framer-motion";

function easeInOutQuint(x: number): number {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

const ImageContainerMotion = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      type: "spring",
      bounce: 0.4,
      delayChildren: 3,
    },
  },
  transition: {
    delay: 4,
  },
};

const ImageMotion = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    delay: 2.8,
  },
};

const Header: React.FC = () => {
  const Colors = ["bg-secondary", "bg-tertiary", "bg-quaternary"];
  const ImageGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
    const Color = Colors[Math.floor(Math.random() * 3)];
    return (
      <motion.div
        variants={ImageMotion}
        key={index}
        className={`w-[150px] h-[250px] xs:w-[175px] xs:h-[275px] md:w-[225px] md:h-[325px] relative shadow-extended border-2 border-typography p-2 ${Color}`}
      >
        <Image
          src="/images/header-1.jpg"
          alt="Nagel Bild"
          layout="fill"
          objectFit="cover"
          className="header-image"
        />
      </motion.div>
    );
  });

  return (
    <header className="w-full py-12 h-[1000px] lg:h-[800px] px-8 md:py-20 md:px-0">
      <Container Styles="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex flex-col items-center lg:items-start w-full space-y-[-2rem] lg:w-[50%]">
          <motion.h1 className="font-primary text-4xl xs:text-5xl md:text-6xl text-typography -rotate-[6deg] relative">
            <motion.span
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                y: -10,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 0,
              }}
              transition={{
                delay: 2.2,
                type: "spring",
                bounce: 0.4,
                duration: 1,
              }}
              className="font-tertiary text-tertiary inline-block"
            >
              Sail
            </motion.span>{" "}
            your Nails <br />
            <motion.span
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                y: -10,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 0,
              }}
              transition={{
                delay: 2.3,
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              className="font-tertiary text-quaternary inline-block"
            >
              Brutalism{" "}
            </motion.span>{" "}
            Style <br />
            <motion.span
              initial={{
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                y: -10,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 0,
              }}
              transition={{
                delay: 2.4,
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              className="font-tertiary text-secondary inline-block"
            >
              Trendy{" "}
            </motion.span>{" "}
            North Shit
          </motion.h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="-my-12 w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] md:w-[400px] md:h-[400px]"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                delay: 2.5,

                type: "spring",
                bounce: 0.4,
                duration: 2,
              }}
              d="M250 250q277 50 150 150-106 133 150 150"
              markerEnd="url(#a)"
              transform="rotate(49 400 400)"
              strokeWidth={10}
              stroke="#fcf6bd"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <motion.marker
                markerWidth={10}
                markerHeight={10}
                refX={5}
                refY={5}
                viewBox="0 0 10 10"
                orient="auto"
                id="a"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 2.7,

                  type: "spring",
                  bounce: 0.4,
                  duration: 2,
                }}
              >
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: 2.7,

                    type: "spring",
                    bounce: 0.4,
                    duration: 2,
                  }}
                  fill="none"
                  strokeWidth={1.667}
                  stroke="#fcf6bd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m1.667 7.5 5-2.5-5-2.5"
                />
              </motion.marker>
            </defs>
          </svg>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 2.8,

              type: "spring",
              bounce: 0.4,
              duration: 0.8,
            }}
          >
            <button className="ml-12 lg:ml-24 text-xl xs:text-2xl md:text-3xl outline-none rotate-[6deg] bg-quaternary shadow-initial hover:shadow-animate active:shadow-tap active:scale-95 duration-300 px-2 py-2 border-2 border-typography font-primary cursor-pointer z-[1]">
              Get Appointment
            </button>
          </motion.div>
        </div>
        <div className="relative w-full lg:w-[50%]">
          <div className="w-full absolute -left-24  xl:-left-12 top-12 lg:-top-60 z-[0]">
            <motion.div
              variants={ImageContainerMotion}
              initial="initial"
              animate="animate"
              className="grid grid-cols-3 gap-x-40 lg:gap-x-60 xl:gap-x-24 md:gap-x-10 gap-y-6 lg:gap-y-14 w-full rotate-12"
            >
              {ImageGrid}
            </motion.div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
