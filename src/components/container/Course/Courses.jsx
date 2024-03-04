import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          At MTZIC Education, our top categories include math, science, social
          studies, Urdu, Sanskrit, general knowledge, English, and Hindi. We provide
          comprehensive courses in each subject, taught by expert instructors to
          ensure thorough understanding and success.
        </p>
      </div>
      <div
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>
      <div className="text-xl font-bold mt-32"> Heartwarming  <span className="text-Teal">Memories</span></div>
      <div className="mt-12 overflow-x-hidden w-full  relative ">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%]  w-[480%] animate-slide ">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
