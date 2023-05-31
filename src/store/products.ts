import { create } from "zustand";
import { ICartItem, IProduct } from "../types/interfaces";

interface IProductsStore {
  lovely: IProduct[];
  cart: ICartItem[];
  setLovely: (products: IProduct[]) => void;
  addToCart: (product: ICartItem) => void;
}

export const useProductsStore = create<IProductsStore>((set, get) => ({
  lovely: [],
  cart: [],
  setLovely: (products: IProduct[]) => set({ lovely: products }),
  addToCart: (product: ICartItem) => {
    const { cart } = get();
    set({ cart: [...cart, product] });
  },
  deleteFromCart: (id: number) => {
    const { cart } = get();
    let filtered = cart.filter((i: ICartItem) => i.id !== id);
    set({ cart: filtered });
  },
}));
