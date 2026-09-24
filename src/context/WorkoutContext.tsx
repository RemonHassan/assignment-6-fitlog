"use client";
import { IWorkout } from "@/type/WorkOutType";
import { createContext, useState } from "react";

type IWorkoutContext = {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  save: IWorkout[];
  setSave: React.Dispatch<React.SetStateAction<IWorkout[]>>;
};

export const WorkoutContext = createContext<IWorkoutContext>({
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [save, setSave] = useState<IWorkout[]>([]);
  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
  };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
