import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as Li } from "react-scroll";
import { Link } from "react-router-dom";
const branch = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section " id="home">
      <div className="text-center ">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Here is my <span className="text-Teal">First Branch</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          MTZIC Education fosters collaboration with other branches to enrich
          the learning experience. Through partnerships, we expand course
          offerings and share best practices, creating a supportive network for
          continuous improvement. Together, we leverage expertise to benefit
          students and communities across locations, ensuring a comprehensive
          educational experience.
        </p>
      </div>
      <div className="md:flex items-center justify-center">
        <div class=" w-full h-96">
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Embrace the <br /> New Way <br /> to Learn!
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            MTZIC Education provides a supportive and conducive learning
            environment where students can thrive and reach their full
            potential. Join us at MTZIC Education and embark on a journey
            towards academic excellence and success.
          </p>
          <div className="mt-6 flex">
            <div>
              <Li
                to="about"
                smooth
                duration={500}
                preventScrollReset={true}
                className="group flex  px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm cursor-pointer"
              >
                Get Started
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Li>
            </div>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div class="flex justify-end mt-10 relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1721238742880!6m8!1m7!1sc_QxCpfS6PPXKKJ5xW5qFg!2m2!1d28.29850279175773!2d74.9641737560782!3f285.84!4f-13.540000000000006!5f0.4000000000000002"
            width={400}
            title="This is a un"
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    
      <hr class="w-96 h-1 mx-auto my-4 bg-gray border-0 rounded md:my-10"></hr>


      <div className="text-center ">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Here is my <span className="text-Teal">Second Branch</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          MTZIC Education fosters collaboration with other branches to enrich
          the learning experience. Through partnerships, we expand course
          offerings and share best practices, creating a supportive network for
          continuous improvement. Together, we leverage expertise to benefit
          students and communities across locations, ensuring a comprehensive
          educational experience.
        </p>
      </div>
      <div className="md:flex items-center justify-center">
        <div class=" w-full h-96">
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            Embrace the <br /> New Way <br /> to Learn!
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            MTZIC Education provides a supportive and conducive learning
            environment where students can thrive and reach their full
            potential. Join us at MTZIC Education and embark on a journey
            towards academic excellence and success.
          </p>
          <div className="mt-6 flex">
            <div>
              <Li
                to="about"
                smooth
                duration={500}
                preventScrollReset={true}
                className="group flex  px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm cursor-pointer"
              >
                Get Started
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Li>
            </div>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div class="flex justify-end mt-10 relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1721284909978!6m8!1m7!1sPWKcPpXcUQr732RMsdqUgg!2m2!1d28.30157235806992!2d74.95424965432542!3f54.70279721841004!4f54.117808516209095!5f2.6000648139005027"
            width={400}
            title="This is a un"
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="">
        <div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className=" flex items-center justify-center mt-6 gap-8 p-2"
        >
          <Link
            variants={item}
            to="/"
            className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold cursor-pointer"
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default branch;
