"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/type/WorkOutType";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiClock, FiStar, FiCheck, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const ColSaveCard = ({ p }: { p: IWorkout }) => {
  const { save, setSave, plan, setPlan } = useContext(WorkoutContext);

  const handleRemove = (id: number) => {
    const updatedSave = save.filter(
      (item: IWorkout) => Number(item.id) !== Number(id),
    );
    setSave(updatedSave);
    toast.error(`Removed ${p.name} from saved items`);
  };

  const handleMoveToPlan = (id: number) => {
    const isAlreadyInPlan = plan.some(
      (item: IWorkout) => Number(item.id) === Number(id),
    );

    if (isAlreadyInPlan) {
      toast.error(`${p.name} is already in today's plan!`);
      return;
    }

    setPlan([...plan, p]);

    toast.success(`Moved ${p.name} to today's plan!`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121316] border border-zinc-800/80 rounded-2xl p-4 text-white shadow-md hover:border-zinc-700/80 transition-all w-full">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <Image src={p.image} alt={p.name} fill className="object-cover" />
        </div>

        <div className="space-y-1 min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-black uppercase tracking-wider truncate">
            {p.name}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-medium truncate">
            {p.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-300 pt-0.5">
            <span className="flex items-center gap-1">
              <FiClock className="text-[#a3e635] text-sm shrink-0" />
              <span>{p.duration} min</span>
            </span>

            <span className="flex items-center gap-1">
              <span>{p.caloriesBurned} kcal</span>
            </span>

            <span className="flex items-center gap-1">
              <FiStar className="text-[#a3e635] fill-[#a3e635] text-sm shrink-0" />
              <span>{p.rating}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pt-2 sm:pt-0 border-t border-zinc-800/50 sm:border-t-0 shrink-0">
        <div className="flex items-center gap-2 flex-1 sm:flex-initial">
          <Link
            href={`/homepage/${p.id}`}
            className="btn btn-outline text-white hover:bg-zinc-800 border-zinc-700 text-xs font-semibold rounded-full px-3 sm:px-5 normal-case h-9 sm:h-10 min-h-0 flex-1 sm:flex-initial"
          >
            View Details
          </Link>

          <button
            onClick={() => handleMoveToPlan(p.id)}
            className="btn btn-success text-black text-xs font-bold rounded-full px-3 sm:px-5 normal-case h-9 sm:h-10 min-h-0 gap-1.5 flex-1 sm:flex-initial"
          >
            <FiCheck className="text-base stroke-3 shrink-0" />
            <span className="truncate">Add to Plan</span>
          </button>
        </div>

        <button
          onClick={() => handleRemove(p.id)}
          className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-full hover:bg-zinc-800/60 shrink-0"
          aria-label="Remove workout"
        >
          <FiX className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ColSaveCard;
