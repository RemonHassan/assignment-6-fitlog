"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import { useContext } from "react";

const NavPlanBtn = () => {
  const { plan } = useContext(WorkoutContext);
  return (
    <Link
      href="/plans"
      className="hidden items-center gap-2 text-xs text-white transition  sm:flex"
    >
      <span>{`Plan`}</span>
      <p className="bg-[#C2F800] w-[18] h-[18] text-black rounded-full text-center">{`${plan.length}`}</p>
    </Link>
  );
};

export default NavPlanBtn;
