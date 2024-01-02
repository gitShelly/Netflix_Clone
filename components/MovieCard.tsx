import React, { useCallback } from "react";
import { BsFillPlayFill, BsChevronDown } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import HDIcon from "./Icons component/HD";
import Tag from "./Icons component/Tag"


interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal();
  const router = useRouter();
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        src={data.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className=" cursor-pointer object-cover transition duration shadow-xl 
      rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />

      <div className=" opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          src={data.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className=" cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[18vw]"
        />

        <div className=" z-10 bg-zinc-800 sm:p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md ">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="cursor-pointer sm:w-6 sm:h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill size={35} />
            </div>

            <FavouriteButton movieId={data?.id} />

            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className="cursor-pointer sm:w-6 sm:h-6 lg:w-10 lg:h-10  border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <FaThumbsUp
                size={20}
                className="text-white hover:text-neutral-300 "
              />
            </div>
            </div>

            <div className=" cursor-pointer sm:w-6 sm:h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <BsChevronDown
                onClick={() => openModal(data && data?.id)}
                size={25}
                className="text-white hover:text-neutral-300 "
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-6 w-full items-center gap-2 items-center">
            <span className="text-green-400 font-semibold lg:text-[15px] sm:text-[px]">
              97% Match
            </span>
            <Tag tag={data.tag}/>
            <span className="text-white text-[10px] lg:text-sm">
              {data.duration}
            </span>
            <HDIcon />
          </div>
          <p className="text-white text-sm mt-4">{data.tagDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
