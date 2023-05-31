import React from "react";
import { Container } from "../../components/Container";
import { products } from "../../mocks/products";
import { CartItem } from "../../components/CartItem";
import { Button } from "../../components/Button";
import { useProductsStore } from "../../store/products";

export const Cart = () => {
  const { cart } = useProductsStore();
  return (
    <Container className="flex flex-col items-center justify-center">
      <div className="font-bold pt-10 pb-5">Cart</div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            currency={product.currency}
          ></CartItem>
        ))}
      </div>
      <div className="sticky bottom-0 py-5">
        <Button
          className=" pt-4 bg-primary text-white"
          name="Buyurtma berish"
        ></Button>
      </div>
    </Container>
  );
};
