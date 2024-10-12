import React from "react";

const Loading = ({ loading, status, error, children }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[90vh] ">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  if (status === "failed") {
    return <div> {error}</div>;
  }

  return <div>{children}</div>;
};

export default Loading;
