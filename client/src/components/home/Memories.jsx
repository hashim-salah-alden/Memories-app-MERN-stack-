import React, { useState } from "react";
import AddMemoryForm from "../forms/AddMemoryModel.jsx";
import MemoryCard from "../MemoryCard";
import { useSelector } from "react-redux";

import useMemories from "../../zustand/useMemories";
import useGetMemories from "../../hooks/useGetMemories.js";
import useGetUser from "../../hooks/useGetUser.js";

const MemoriesContainer = () => {
  const { user } = useGetUser();
  const [currentId, setCurrentId] = useState(0);
  const { displayedMemories, isOpen, setIsOpen } = useMemories();

  const { memories } = useGetMemories();

  return (
    <div className="flex py-8 grow">
      <div className="memory-container flex flex-wrap justify-around lg:justify-evenly gap-y-8 lg:gap-8  sm:w-full xl:w-full  ">
        {displayedMemories?.map((memory) => {
          return (
            <MemoryCard
              memory={memory}
              setCurrentId={setCurrentId}
              key={memory._id}
              setIsOpen={setIsOpen}
            />
          );
        })}
        {displayedMemories.length === 0 && (
          <p className="text-center text-gray-400">No memories found</p>
        )}
      </div>
      {user && (
        <AddMemoryForm
          currentId={currentId}
          setCurrentId={setCurrentId}
          memories={memories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default MemoriesContainer;
