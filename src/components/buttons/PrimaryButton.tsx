import React from "react";

interface PrimaryButtonProps {
  Title: string;
  BackgroundColor: string;
  ClassNames: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  Title,
  BackgroundColor,
  ClassNames,
}) => {
  return (
    <button
      className={`text-xl xs:text-2xl md:text-3xl outline-none shadow-initial hover:shadow-animate active:shadow-tap active:scale-95 duration-300 px-2 py-2 border-2 border-typography font-primary cursor-pointer ${ClassNames} ${BackgroundColor}`}
    >
      {Title}
    </button>
  );
};

export default PrimaryButton;
