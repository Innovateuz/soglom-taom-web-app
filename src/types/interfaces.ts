export interface IProduct {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
}
