import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useMemories from "../../zustand/useMemories";
import useGetMemories from "../../hooks/useGetMemories.js";
import useGetUser from "../../hooks/useGetUser.js";
import { MdOutlineCancel } from "react-icons/md";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const { memories } = useGetMemories();
  const { user } = useGetUser();
  const { displayedMemories, setDisplayedMemories } = useMemories();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 2) {
      return toast.error("Search term must be at least 2 characters long");
    }
    if (search.length >= 2) {
      setDisplayedMemories(
        displayedMemories.filter((memory) =>
          memory.title.includes(search.trim().toLocaleLowerCase())
        )
      );
      setSearched(true);
    }
  };

  const handleFilter = (e) => {
    if (e.target.value === "all-memories") {
      setDisplayedMemories([...memories]);
    }
    if (e.target.value === "my-memories") {
      setDisplayedMemories(
        memories.filter((memory) => memory.creator === user._id)
      );
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const cancelSearch = () => {
    setDisplayedMemories([...memories]);
    setSearch("");
    setSearched(false);
  };


  return (
    <div className="flex justify-between items-center">
      <form onSubmit={handleSearch}>
        <label className="input input-bordered flex items-center gap-2 bg-[#1f3395]">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            className=" placeholder-slate-300 text-slate-50"
            value={search}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 text-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {searched && (
          <button
            className="btn btn-circle bg-opacity-0 border-0 text-white"
            onClick={cancelSearch}
          >
            <MdOutlineCancel onC className="w-6 h-6 outline-none" />
          </button>
        )}
      </form>

      <label className="form-control w-24 max-w-xs ">
        <select
          onChange={handleFilter}
          className="select select-bordered bg-[#1f3395] text-slate-50"
        >
          <option disabled selected>
            Sort
          </option>
          <option value="all-memories">All Memories</option>
          <option value="my-memories">My Memories</option>
        </select>
      </label>
    </div>
  );
};

export default Search;
