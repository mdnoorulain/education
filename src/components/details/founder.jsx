import React from "react";
import founderimg from "../../assets/founder.png";
import {Navbar} from '../../components/index'
function founder() {
  return (
    <div className=" mx-auto px-4 py-8  bg-slate-100 w-screen h-screen">
      <div><Navbar /></div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ">
        <div className="flex flex-col items-center justify-center w-4/5">
          <img
            src={founderimg}
            alt="Founder profile"
            className="w-48 h-48 rounded-full object-cover "
          />
          <h2 className="text-2xl font-bold mt-4">M.T.Z Ashrafi</h2>
        </div>
        <div className=" mt-10 m-7 ">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-gray-700 mt-4">
            In the heart of every dream lies the seed of possibility, waiting to
            be nurtured by passion and perseverance. With unwavering dedication,
            M.T.Z Ashrafi planted the seeds of MTZIC Education, cultivating a
            garden of knowledge where aspirations blossom into reality. His
            vision illuminates the path to knowledge, fostering a community
            where dreams take flight. With unwavering dedication, he shapes
            futures and ignites passions. Through his leadership, MTZIC
            Education transcends boundaries, empowering minds to soar to new
            heights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default founder;
