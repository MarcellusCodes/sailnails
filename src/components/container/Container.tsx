import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  Styles?: string;
}

const Container: React.FC<ContainerProps> = ({ children, Styles }) => {
  return <div className={`container mx-auto ${Styles}`}>{children}</div>;
};

export default Container;
