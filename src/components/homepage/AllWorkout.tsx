import { getAllWorkouts } from "@/lib/workout";
import { IWorkout } from "@/type/WorkOutType";
import WorkOutCard from "../shared/WorkOutCard";

const AllWorkout = async () => {
  const allWorkOuts = await getAllWorkouts();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 space-y-1">
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm font-normal">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allWorkOuts.map((workout: IWorkout) => (
          <WorkOutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default AllWorkout;
