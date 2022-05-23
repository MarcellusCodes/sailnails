import React from "react";
import Image from "next/image";

const Branding: React.FC = () => {
  return (
    <div className="flex flex-row items-center space-x-2 shadow-initial border-2 border-typography py-1 px-2">
      <div className="w-[56px] h-[56px]">
        <Image
          src="/images/branding.png"
          alt="Bild vom Branding"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <h2 className="font-primary text-3xl text-typography">Sail Nails</h2>
    </div>
  );
};

export default Branding;
