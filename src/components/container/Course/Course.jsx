import React from "react";

const Course = ({ image,  title}) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="" />
      <div className="text-sm mt-2 font-bold">{title}</div>
    </div>
  );
};

export default Course;
