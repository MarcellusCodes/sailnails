import React from "react";

interface LayoutContainerProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <div className="bg-primary relative">{children}</div>;
};

export default LayoutContainer;
