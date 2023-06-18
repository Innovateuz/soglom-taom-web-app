import React from "react";
import { Container } from "../../components/Container";
import { products } from "../../mocks/products";
import { CartItem } from "../../components/CartItem";
import { Button } from "../../components/Button";
import { useProductsStore } from "../../store/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NoContent } from "../../components/NoContent";

export const Cart = () => {
  const { cart, clear } = useProductsStore();
  const navigate = useNavigate();
  const data = JSON.parse(window.localStorage.getItem("userdata") || "{}");

  const onsubmit = () => {
    if (data) {
      navigate("/order");
      clear();
      return;
    }
    toast("You should to update your accaunt!");
    navigate("/profile/update");
  };

  return (
    <Container className="flex flex-col items-center justify-center">
      <div className="font-bold pt-10 pb-5">Cart</div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {cart?.length < 1 && <NoContent />}
        {cart.map((product) => (
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
      {cart?.length > 0 && (
        <div className="sticky bottom-0 py-5">
          <Button
            onClick={onsubmit}
            className=" pt-4 bg-primary text-white"
            name="Buyurtma berish"
          ></Button>
        </div>
      )}
    </Container>
  );
};
