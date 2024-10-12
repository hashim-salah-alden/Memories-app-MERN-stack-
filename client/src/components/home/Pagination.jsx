import React from "react";
import useMemories from "../../zustand/useMemories";

const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = useMemories();

  const handlePagination = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  return (
    <div className="join  w-full flex justify-center">
      {totalPages > 1 &&
        [...Array(totalPages)].map((page, indx) => {
          return (
            <input
              className="join-item btn btn-square "
              type="radio"
              name="options"
              aria-label={indx + 1}
              defaultChecked={indx + 1 === currentPage}
              key={indx}
              onClick={handlePagination}
              value={indx + 1}
            />
          );
        })}
    </div>
  );
};

export default Pagination;
