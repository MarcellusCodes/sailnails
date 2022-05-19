import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SplashScreen: React.FC = () => {
  const transition = { type: "ease", duration: 2 };
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ scale: 0 }}
        transition={{ type: "ease", duration: 0.5, bounce: 0, delay: 2 }}
        className="bg-primary h-screen relative overflow-x-hidden"
      >
        <motion.svg
          initial={{ x: "-100%", y: "-50%", opacity: 0 }}
          animate={{ x: "-50%", opacity: [1, 0] }}
          transition={transition}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 400"
          className="md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] absolute left-1/2 top-1/2"
        >
          <motion.path
            d="M21.137 208.121c31.46 11.63 121.37 72.912 188.764 69.78 67.395-3.13 141.052-85.287 215.603-88.567 74.552-3.28 171.767 70.824 231.707 68.886 59.94-1.938 106.609-67.097 127.93-80.516"
            fill="none"
            strokeWidth={24.9375}
            stroke="#98c8e0"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </motion.svg>
        <motion.div
          initial={{ x: "-100%", offsetDistance: "0", opacity: 0 }}
          animate={{ x: 0, offsetDistance: "100%", opacity: [1, 0] }}
          transition={transition}
          className="absolute top-[150px] w-[64px] h-[64px] lg:w-[128px] lg:h-[128px] -left-[50%] lg:left-[20%] branding-img"
        >
          <Image
            src="/images/branding.png"
            alt="Bild vom Branding"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default SplashScreen;
