import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={isOpen && "open"} onClick={() => setIsOpen(!isOpen)}>
      <div>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
        <h4>{title}</h4>
      </div>
      {isOpen && <small>{description}</small>}
    </li>
  );
};

export default Accordion;
