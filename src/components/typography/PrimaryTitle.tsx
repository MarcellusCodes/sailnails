import React from "react";
import { motion } from "framer-motion";

interface PrimaryTitleProps {
  children: React.ReactNode;
  ClassNames: string;
  Color: string;
}

const PrimaryTitle: React.FC<PrimaryTitleProps> = ({
  children,
  ClassNames,
  Color,
}) => {
  return (
    <>
      <motion.h1
        className={`font-primary text-4xl xs:text-5xl md:text-6xl ${Color} ${ClassNames}`}
      >
        {children}
      </motion.h1>
    </>
  );
};

export default PrimaryTitle;
