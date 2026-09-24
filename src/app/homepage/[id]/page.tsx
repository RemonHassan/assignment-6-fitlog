import Image from "next/image";
import { getAllWorkouts } from "@/lib/workout";
import { IWorkout } from "@/type/WorkOutType";
import { MdDateRange } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const allWorkout = await getAllWorkouts();

  const singleWorkout = allWorkout.find(
    (workout: IWorkout) => Number(workout.id) === Number(id),
  );

  if (!singleWorkout) {
    return (
      <div className="p-8 text-white font-mono text-center">
        Workout not found.
      </div>
    );
  }

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative w-full aspect-square bg-[#0b0c0e] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src={singleWorkout.image}
            alt={singleWorkout.name}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {singleWorkout.name}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {singleWorkout.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {singleWorkout.muscleGroups?.map((group: string) => (
              <span
                key={group}
                className="bg-[#a3e635] text-black font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full inline-block"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="bg-[#121418] border border-zinc-800/80 rounded-xl overflow-hidden text-xs sm:text-sm">
            <div className="divide-y divide-zinc-800/60">
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Equipment
                </span>
                <span className="text-zinc-200 font-medium">
                  {singleWorkout.equipment}
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Difficulty
                </span>
                <span className="text-zinc-200 font-medium">
                  {singleWorkout.difficulty}
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Sets
                </span>
                <span className="text-zinc-200 font-mono font-medium">
                  {singleWorkout.sets}
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Reps
                </span>
                <span className="text-zinc-200 font-mono font-medium">
                  {singleWorkout.reps}
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Duration
                </span>
                <span className="text-zinc-200 font-mono font-medium">
                  {singleWorkout.duration} min
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Calories
                </span>
                <span className="text-zinc-200 font-mono font-medium">
                  {singleWorkout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  Rating
                </span>
                <span className="text-zinc-200 font-mono font-medium">
                  {singleWorkout.rating}
                </span>
              </div>
            </div>
          </div>

          {singleWorkout.instructions &&
            singleWorkout.instructions.length > 0 && (
              <div className="space-y-3 pt-2">
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-white">
                  INSTRUCTIONS
                </h2>
                <ol className="space-y-2 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {singleWorkout.instructions.map(
                    (step: string, index: number) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-zinc-500 font-mono font-bold select-none">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn btn-success text-black">
              <MdDateRange className="text-lg text-black" />
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 bg-[#121418] hover:bg-zinc-800 text-zinc-300 font-extrabold text-xs tracking-wider uppercase py-3 px-5 rounded-lg border border-zinc-800 transition-all active:scale-95 cursor-pointer">
              <CiSaveDown2 />

              <span>Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
