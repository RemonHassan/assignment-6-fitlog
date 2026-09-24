"use client";
import ColPlanCard from "@/components/ColPlanCard";
import ColSaveCard from "@/components/ColSaveCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/type/WorkOutType";
import React, { useContext, useState } from "react";

type SortOption = "default" | "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { save, plan } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const currentList = activeTab === "plan" ? plan : save;

  // Sorting logic (descending order for metrics)
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    }
    if (sortBy === "calories") {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    }
    if (sortBy === "rating") {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }
    return 0;
  });

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (Number(item.duration) || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (Number(item.caloriesBurned) || 0),
    0,
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 text-white space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-black uppercase tracking-wider">
            My Plan
          </h2>
          <p className="text-zinc-400 text-sm font-normal">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider">
            Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="select select-bordered select-sm bg-[#121316] border-zinc-800 text-zinc-200 font-semibold focus:outline-none focus:border-zinc-600 rounded-lg"
          >
            <option value="default">Default</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#121316] border border-zinc-800/80 rounded-2xl p-6 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Exercises
          </p>
          <p className="text-3xl sm:text-4xl font-black text-[#a3e635] mt-1">
            {totalExercises}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Minutes
          </p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1">
            {totalMinutes}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Calories
          </p>
          <p className="text-3xl sm:text-4xl font-black text-white mt-1">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_plans_tabs"
          className="tab font-bold text-sm uppercase"
          aria-label="Today's Plan"
          checked={activeTab === "plan"}
          onChange={() => setActiveTab("plan")}
        />
        <div className="tab-content bg-[#121316] border-zinc-800/80 p-6 rounded-b-2xl space-y-4">
          {activeTab === "plan" && sortedList.length > 0 ? (
            sortedList.map((p: IWorkout) => <ColPlanCard key={p.id} p={p} />)
          ) : (
            <p className="text-zinc-500 text-sm text-center py-8">
              No workouts added to today&apos;s plan yet.
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_plans_tabs"
          className="tab font-bold text-sm uppercase"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content bg-[#121316] border-zinc-800/80 p-6 rounded-b-2xl space-y-4">
          {activeTab === "saved" && sortedList.length > 0 ? (
            sortedList.map((p: IWorkout) => <ColSaveCard key={p.id} p={p} />)
          ) : (
            <p className="text-zinc-500 text-sm text-center py-8">
              No saved workouts yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
