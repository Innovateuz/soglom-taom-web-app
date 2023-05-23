import {create} from "zustand";

interface IProductsStore {
    lovely: any,
    setLovely: (products: any) => void
}

export const useProductsStore = create<IProductsStore>((set) => ({
    lovely: [],
    setLovely: (products: string) => set({lovely: products}),
}));