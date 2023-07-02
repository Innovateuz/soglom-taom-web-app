import { Container } from "../../components/Container";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { products } from "../../mocks/products";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { isLiked, saveToLocal, setInit } from "../../utils/lovely";
import { useProductsStore } from "../../store/products";
import { AddRemoveBtn } from "../../components/AddRemoveBtn";
import { useEffect, useState } from "react";
import { ICartItem, IProduct } from "../../types/interfaces";
import { useTranslation } from "react-i18next";

export const ProductDetails = () => {
  let { pathname } = useLocation();
  let { id } = useParams();

  const navigate = useNavigate();
  const { setLovely, lovely, addToCart, cart, updateProduct, deleteFromCart } =
    useProductsStore();
  const [product, setProduct] = useState<IProduct>();
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < products?.length; i++) {
      // @ts-ignore
      if (products[i].id == id) {
        setProduct(products[i]);
      }
    }
  }, [id]);

  const click = () => {
    saveToLocal(product, setLovely);
  };

  const onProductAddHandler = (): void => {
    let newProduct: any = {
      ...product,
      quantity: 1,
    };
    addToCart(newProduct);
  };

  const checkIsAddedToCart = () => {
    for (let i = 0; i < cart.length; i++) {
      // @ts-ignore
      if (cart[i].id == id) {
        setIsAdded(true);
        setQuantity(cart[i].quantity);
      }
    }
  };

  useEffect(() => {
    checkIsAddedToCart();
  }, [cart]);

  const { t } = useTranslation();

  return (
    <Container className="pt-[20px]">
      <div className="flex flex-col justify-center items-center gap-3 pt-2">
        <div>
          <img
            className="object-cover  shadow-2xl w-[220px] h-[220px] rounded-full"
            src={product?.image}
            alt="Menu"
          />
        </div>
        <div className="overflow-hidden px-2 flex flex-col  w-full text-center justify-center  items-center pb-3 mt-[20px] pt-[30px] rounded-3xl">
          {isLiked(id, lovely) ? (
            <div className="mb-3">
              <HiHeart
                onClick={() => click()}
                className="w-[30px] h-[30px] text-primary cursor-pointer"
              />
            </div>
          ) : (
            <div className="mb-3">
              <HiOutlineHeart
                onClick={() => click()}
                className="w-[30px] h-[30px] cursor-pointer"
              />
            </div>
          )}
          <p className="whitespace-nowrap truncate overflow-hidden overflow-ellipsis font-bold text-3xl">
            {product?.name}
          </p>
          <p className="whitespace-nowrap truncate overflow-hidden font-medium text-primary text-2xl mt-1">
            {product?.price} {product?.currency}
          </p>
          <p className="opacity-[0.8] text-start mt-2 pl-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            blanditiis facere, placeat assumenda laborum aspernatur, veniam unde
            aperiam nihil sed porro corrupti ea numquam voluptate enim! Fugiat
            quam quaerat accusantium.
          </p>
        </div>
        <div>
          {!isAdded && (
            <Button
              onClick={() => onProductAddHandler()}
              className="bg-[#FA4A0C] text-white"
              name={t("Details.Button1")}
            ></Button>
          )}
          {isAdded && (
            <div className="flex gap-5">
              <Button
                onClick={() => navigate("/cart")}
                className="bg-[#FA4A0C] text-white"
                name={t("Details.Button2")}
              ></Button>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() =>
                    updateProduct("minus", id || "", deleteFromCart)
                  }
                  className="bg-[#FA4A0C] text-white"
                  name="-"
                ></Button>
                <p>{quantity}</p>
                <Button
                  onClick={() =>
                    updateProduct("plus", id || "", deleteFromCart)
                  }
                  className="bg-[#FA4A0C] text-white"
                  name="+"
                ></Button>
              </div>
            </div>
          )}
        </div>
        {/*<AddRemoveBtn product={product}></AddRemoveBtn>*/}
      </div>
    </Container>
  );
};
