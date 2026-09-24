import { IWorkout } from "@/type/WorkOutType";
import React from "react";
import { MdDateRange } from "react-icons/md";

const PlanButton = ({ singleWorkout }: { singleWorkout: IWorkout }) => {
  console.log(singleWorkout);
  return (
    <button className="btn btn-success text-black">
      <MdDateRange className="text-lg text-black" />
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
