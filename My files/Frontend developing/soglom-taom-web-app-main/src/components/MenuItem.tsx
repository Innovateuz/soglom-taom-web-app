import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface IProps {
  name: string;
  link: string;
}

export const MenuItem = ({ name, link }: IProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full cursor-pointer px-6 py-4 flex justify-between items-center bg-white shadow rounded-2xl"
      onClick={() => navigate(`${link}`)}
    >
      <p className="text-base">{name}</p>
      <HiOutlineChevronRight />
    </div>
  );
};
