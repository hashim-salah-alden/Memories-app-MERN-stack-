import React, { useEffect, useState } from "react";
import useGetMemories from "../hooks/useGetMemories";
import Loading from "../components/feedback/Loading";
import Search from "../components/home/Search";
import MemoriesContainer from "../components/home/Memories";
import Pagination from "../components/home/Pagination";

import useMemories from "../zustand/useMemories";

const Home = () => {
  const { loading, memories } = useGetMemories();
  const { setDisplayedMemories } = useMemories();

  useEffect(() => {
    setDisplayedMemories([...memories]);
  }, [memories, setDisplayedMemories]);

  return (
    <Loading className="bg-blue-700 " loading={loading}>
      <div className="flex flex-col justify-between ">
        {/* search */}
        <Search />
        {/* memories */}
        <MemoriesContainer />
        {/* pagination */}
        <Pagination />
      </div>
    </Loading>
  );
};

export default Home;
