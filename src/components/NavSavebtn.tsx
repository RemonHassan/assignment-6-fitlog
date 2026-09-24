"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavSavebtn = () => {
  const { save } = useContext(WorkoutContext);
  return (
    <Link
      href="/plans"
      className="hidden items-center gap-2 text-xs text-white  hover:text-white sm:flex"
    >
      <span>{`Saved`}</span>
      <p className=" w-[18] h-[18] text-black rounded-full border border-gray-600 text-center">
        <span className="text-white">{`${save.length}`}</span>
      </p>
    </Link>
  );
};

export default NavSavebtn;
