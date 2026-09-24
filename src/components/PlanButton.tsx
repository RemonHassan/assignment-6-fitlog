"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/type/WorkOutType";
import React, { useContext } from "react";
import { MdDateRange } from "react-icons/md";
import { toast } from "react-toastify";

const PlanButton = ({ singleWorkout }: { singleWorkout: IWorkout }) => {
  const { plan, setPlan } = useContext(WorkoutContext);

  const handlePlan = () => {
    const isAlreadySaved = plan.some(
      (item: IWorkout) => Number(item.id) === Number(singleWorkout.id),
    );

    if (isAlreadySaved) {
      toast.error(`${singleWorkout.name} is already saved!`);
      return;
    }

    setPlan([...plan, singleWorkout]);
    toast.success(`Saved ${singleWorkout.name}`);
  };
  return (
    <button onClick={() => handlePlan()} className="btn btn-success text-black">
      <MdDateRange className="text-lg text-black" />
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
