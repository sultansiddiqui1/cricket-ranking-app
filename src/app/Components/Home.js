import React from "react";
import HeroImage from "./heroImage";
import Hometext from "./hometext";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <HeroImage />
      <Hometext />
    </div>
  );
};

export default HomePage;
