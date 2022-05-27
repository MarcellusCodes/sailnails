import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuButton = () => {
  const [Activate, SetActivate] = useState(false);
  const UpperRectMotion = {
    rest: { x: 0, y: 0, transition: { type: "spring" } },
    hover: {
      x: 10,
      y: -7,
      rotate: -30,
      transition: {
        type: "spring",
      },
    },
  };
  const MiddleRectMotion = {
    rest: { opacity: 1, transition: { type: "spring" } },
    hover: {
      opacity: 0,
      transition: {
        type: "spring",
      },
    },
  };
  const LowerRectMotion = {
    rest: { x: 0, y: 0, transition: { type: "spring" } },
    hover: {
      x: -5,
      y: 7,
      rotate: 50,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.button
        onClick={() => {
          SetActivate((PrevState) => !PrevState);
        }}
        initial={"rest"}
        animate={Activate ? "hover" : "rest"}
        whileHover="animate"
        className="block md:hidden outline-none shadow-initial hover:shadow-animate active:shadow-tap active:scale-95 duration-300 px-1 py-1 lg:px-2 lg:py-2 border-2 border-typography font-primary"
      >
        <motion.svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            variants={UpperRectMotion}
            x="6"
            y="9"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="0px 0px"
          ></motion.rect>
          <motion.rect
            variants={MiddleRectMotion}
            x="6"
            y="15"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            opacity="1"
          ></motion.rect>
          <motion.rect
            variants={LowerRectMotion}
            x="6"
            y="21"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="0px 0px"
          ></motion.rect>
        </motion.svg>
      </motion.button>
    </>
  );
};

export default MenuButton;
