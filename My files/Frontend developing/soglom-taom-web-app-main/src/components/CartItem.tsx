import React, {useEffect, useState} from "react";
import {AddRemoveBtn} from "./AddRemoveBtn";
import {Button} from "./Button";
import {useProductsStore} from "../store/products";
import {products} from "../mocks/products";

interface IProps {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
}

export const CartItem = ({id, image, name, price, currency}: IProps) => {
  const {deleteFromCart, cart, updateProduct} = useProductsStore();

  const [quantity, setQuantity] = useState<number>(0)

  const checkIsAddedToCart = () => {
    for (let i = 0; i < cart.length; i++) {
      // @ts-ignore
      if (cart[i].id == id) {
        setQuantity(cart[i].quantity)
      }
    }
  }

  useEffect(() => {
    checkIsAddedToCart()
  }, [cart])

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
        <div className='flex items-center gap-3'>
          <Button
            onClick={() => updateProduct('minus', id || '', deleteFromCart)}
            className="bg-[#FA4A0C] text-white"
            name="-"
          ></Button>
          <p>{quantity}</p>
          <Button
            onClick={() => updateProduct('plus', id || '', deleteFromCart)}
            className="bg-[#FA4A0C] text-white"
            name="+"
          ></Button>
        </div>
      </div>
    </div>
  );
};
