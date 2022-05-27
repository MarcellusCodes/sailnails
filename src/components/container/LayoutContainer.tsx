import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <div className="relative bg-primary overflow-hidden">{children}</div>;
};

export default LayoutContainer;
