import React from "react";
import { AddRemoveBtn } from "./AddRemoveBtn";

interface IProps {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
}

export const CartItem = ({ id, image, name, price, currency }: IProps) => {
  return (
    <div className="flex items-center justify-center gap-10 py-3 px-10 shadow-2xl rounded-3xl bg-white">
      <div>
        <img
          className="object-cover w-[120px] h-[120px] rounded-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="font-bold pb-1">{name}</p>
        <p className="font-bold text-primary pb-2">
          {price} {currency}
        </p>
        <AddRemoveBtn height={40}></AddRemoveBtn>
      </div>
    </div>
  );
};
