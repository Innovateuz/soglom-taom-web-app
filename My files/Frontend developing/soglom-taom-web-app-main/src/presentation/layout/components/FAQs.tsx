import React from "react";
import { questions } from "../../../questions/questions";
import { FAQ } from "../../../components/FAQ";
import { Container } from "../../../components/Container";

export const FAQs = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-10 
    "
    >
      <h1 className="font-bold text-3xl mb-8">FAQs</h1>
      {questions.map((el) => {
        return <FAQ key={el.id} question={el.question} answer={el.answer} />;
      })}
    </div>
  );
};
