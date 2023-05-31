import { useProductsStore } from "../store/products";

export const useProducts = () => {
  const { cart } = useProductsStore();

  const getTotalPrice = () => {
    let res = 0;
    for (let i = 0; i < cart?.length; i++) {
      res += cart[i]?.price;
    }
  };

  return {
    getTotalPrice,
  };
};
