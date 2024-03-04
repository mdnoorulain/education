import React from "react";
import { accordions } from "../../Data";
import Accordion from "./Accordion";


const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Meet <span className="text-Teal">the Mastermind</span> <br /> Behind
            Our Institute
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            In the heart of every dream lies the seed of possibility, waiting to
            be nurtured by passion and perseverance. With unwavering dedication,
            M.T.Z Ashrafi planted the seeds of MTZIC Education, cultivating
            a garden of knowledge where aspirations blossom into reality. His
            vision illuminates the path to knowledge, fostering a community
            where dreams take flight. With unwavering dedication, he shapes
            futures and ignites passions. Through his leadership, MTZIC
            Education transcends boundaries, empowering minds to soar to new
            heights.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Know More
            
          </button>
        </div>
        
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Meet <span className="text-Teal">Our Inspirational</span> <br />{" "}
            Educator
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Ummul Wara, a cherished educator at MTZIC Education, radiates warmth
            and wisdom. With her nurturing spirit and boundless enthusiasm, she
            inspires students to reach for the stars. Her dedication to
            excellence and genuine care for each learner make her a beacon of
            inspiration in the classroom and beyond.
          </p>
          <button 
          className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get More
          </button>

          

        </div>
        
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
