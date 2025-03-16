import React from "react";
import Image from "next/image";

const heroImage = () => {
  return (
    <div className="w-full md:w-1/2 h-screen relative">
      <Image
        src="/tv_full.png"
        alt="Travis Head batting in a test game"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default heroImage;
