import React, { useEffect } from "react";
import useGetUser from "../hooks/useGetUser";
import { actDeleteMemory } from "../store/memories/memoriesSlice";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

import useMemories from "../zustand/useMemories";

const MemoryCard = ({ memory, setCurrentId }) => {
  const { user } = useGetUser();
  const { setIsOpen, deleteMemory } = useMemories();

  const handleDelete = (id) => {
    dispatch(actDeleteMemory(id));
    deleteMemory(id);
  };

  const dispatch = useDispatch();
  return (
    <div className="card glass md:w-1/5 w-full shadow-xl h-[390px]">
      <figure>
        <img src={memory.image} alt={memory.title} className="h-52 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{memory.title}</h2>
        <p>{memory.message}</p>
        {user?._id === memory.creator && (
          <div className="card-actions justify-between">
            <button
              className={`btn bg-[#1f3395] text-slate-200 border-[#1f3395]  w-[105px]`}
              onClick={() => {
                setCurrentId(memory._id);
                setIsOpen(true);
              }}
            >
              Edit
            </button>

            <button
              className={`btn btn-error  w-[105px]`}
              onClick={() => handleDelete(memory._id)}
            >
              Delete <MdDelete size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoryCard;
