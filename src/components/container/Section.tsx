import React from "react";

interface SectionProps {
  children: React.ReactNode;
  BackgroundColor: string;
}

const Section: React.FC<SectionProps> = ({ children, BackgroundColor }) => {
  return (
    <section className={`relative ${BackgroundColor}`}>{children}</section>
  );
};

export default Section;
