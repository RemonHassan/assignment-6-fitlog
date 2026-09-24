import Image from "next/image";
import { IWorkout } from "@/type/WorkOutType";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";
import Link from "next/link";

const WorkOutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/homepage/${workout.id}`}>
      <button className="w-full text-left focus:outline-none group">
        <div className="bg-[#121316] border border-zinc-800/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg group-hover:border-[#a3e635] transition-colors duration-200 cursor-pointer">
          <div className="relative w-full aspect-16/10 bg-[#0b0c0e]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="bg-[#a3e635]! text-black! font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="space-y-1">
              <h3 className="text-white font-black text-lg uppercase tracking-tight leading-tight">
                {workout.name}
              </h3>
              <p className="text-zinc-500 text-xs font-normal">
                {workout.equipment}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-5 text-xs text-zinc-400 font-normal">
              <div className="flex items-center gap-1.5">
                <IoMdTime />

                <span>{workout.duration} min</span>
              </div>

              <div className="flex items-center gap-1.5">
                <FaFire />
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex items-center gap-1.5">
                <MdOutlineStarRate />
                <span>{workout.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default WorkOutCard;
