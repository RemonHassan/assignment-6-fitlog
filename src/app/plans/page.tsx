"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { save } = useContext(WorkoutContext);
  return (
    <div>
      <h2 className="text-white font-bold">My Plans</h2>
      <div>{save.map((s) => s.name)}</div>
    </div>
  );
};

export default MyPlanPage;
