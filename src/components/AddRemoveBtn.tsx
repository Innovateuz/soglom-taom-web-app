import React from "react";
import { Button } from "./Button";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { useProducts } from "../hook/useProducts";
import { useProductsStore } from "../store/products";

interface IProps {
  height?: any;
}

export const AddRemoveBtn = ({ height }: IProps) => {
  const { addToCart } = useProductsStore();

  return (
    <div className="flex gap-4 items-center ">
      <Button
        className={`bg-[#FA4A0C] rounded-lg text-white h-[${height}px]`}
        // onClick={() => addToCart(product)}
        icon={<MdAdd></MdAdd>}
      ></Button>
      <span>30</span>
      <Button
        className={`bg-[#FA4A0C] rounded-lg text-white h-[${height}px]`}
        icon={<MdRemove></MdRemove>}
      ></Button>
    </div>
  );
};
