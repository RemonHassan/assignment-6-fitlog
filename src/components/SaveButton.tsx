"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/type/WorkOutType";
import React, { useContext } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { toast } from "react-toastify";

const SaveButton = ({ singleWorkout }: { singleWorkout: IWorkout }) => {
  const { save, setSave } = useContext(WorkoutContext);

  const handleSave = () => {
    const isAlreadySaved = save.some(
      (item: IWorkout) => Number(item.id) === Number(singleWorkout.id),
    );

    if (isAlreadySaved) {
      toast.error(`${singleWorkout.name} is already saved!`);
      return;
    }

    setSave([...save, singleWorkout]);
    toast.success(`Saved ${singleWorkout.name}`);
  };

  return (
    <button
      onClick={handleSave}
      className="btn btn-outline text-white hover:bg-zinc-800 border-zinc-800"
    >
      <CiSaveDown2 className="text-lg" />
      <span>Save for later</span>
    </button>
  );
};

export default SaveButton;
