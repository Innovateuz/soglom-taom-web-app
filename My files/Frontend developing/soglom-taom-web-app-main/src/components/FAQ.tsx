import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

interface IQuestions {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: IQuestions) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-2">
      <div
        className={`flex items-center justify-center text-center text-xl font-bold cursor-pointer  border-2 p-4 rounded-xl ${
          show ? "opacity-40" : ""
        }`}
        onClick={() => setShow(!show)}
      >
        <span className="mr-4 cursor-pointer text-3xl">
          {show ? <FiChevronUp /> : <FiChevronDown />}
        </span>
        {"   "}
        {question}
      </div>
      {show && (
        <p
          className={`mt-1 text-center p-4 border-2 rounded-2xl  bg-primary text-white animate-fade-in-down
            
          }`}
        >
          {answer}
        </p>
      )}
    </div>
  );
};
