import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const Accordion = ({ id, title, about }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <div>
        {id === activeIndex && (
          <div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">{about}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
