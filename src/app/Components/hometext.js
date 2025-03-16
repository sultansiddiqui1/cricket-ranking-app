"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const hometext = () => {
  return (
    <>
      <div className="w-full md:w-1/2 h-screen flex flex-col justify-center items-start px-10">
        <h1 className="text-5xl font-bold text-blue-600">
          Discover the Best Batsmen in the World
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Stay updated with the latest ICC cricket rankings and see how your
          favorite players perform on the global stage!
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Cricket is one of the most popular games in the world. Our real-time
          rankings bring you the latest updates on the top batsmen in the t20
          format.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          The rankings are automatically changed after each ICC tournament, but
          not to worry we have got you covered.
        </p>
      </div>
    </>
  );
};

export default hometext;
