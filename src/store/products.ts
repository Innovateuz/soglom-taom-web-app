import {create} from "zustand";
import {ICartItem, IProduct} from "../types/interfaces";

interface IProductsStore {
  lovely: IProduct[];
  cart: ICartItem[];
  setLovely: (products: IProduct[]) => void;
  addToCart: (product: ICartItem) => void;
  deleteFromCart: (id: string) => void;
  updateProduct: (type: string, id: any, deleteFromCart: any) => void
}

export const useProductsStore = create<IProductsStore>((set, get) => ({
  lovely: [],
  cart: [],
  setLovely: (products: IProduct[]) => set({lovely: products}),
  addToCart: (product: ICartItem) => {
    const {cart} = get();
    set({cart: [...cart, product]});
  },
  deleteFromCart: (id: string) => {
    const {cart} = get();
    // @ts-ignore
    let filtered = cart.filter((i: ICartItem) => i.id != id);
    set({cart: filtered});
  },
  updateProduct: (type: string, id: string, deleteFromCart: any) => {
    const {cart} = get()
    let updatedProducts: ICartItem[] = []

    switch (type) {
      case 'minus':
        for (let i = 0; i < cart?.length; i++) {
          // @ts-ignore
          if (cart[i].id == id) {
            if (cart[i].quantity == 0) {
              deleteFromCart(id);
              return;
            }
          }
        }

        updatedProducts = cart?.map((el) => {
          // @ts-ignore
          if (el?.id == id) {
            return {...el, quantity: el?.quantity - 1};
          }

          return el;
        });
        break
      case 'plus':
        updatedProducts = cart?.map((el) => {
          // @ts-ignore
          if (el?.id == id) {
            return {...el, quantity: el?.quantity + 1};
          }

          return el;
        });
        break
    }
    set({cart: updatedProducts});
  },
}));
