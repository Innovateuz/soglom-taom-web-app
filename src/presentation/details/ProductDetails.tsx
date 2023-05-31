import { Container } from "../../components/Container";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { products } from "../../mocks/products";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { isLiked, saveToLocal, setInit } from "../../utils/lovely";
import { useProductsStore } from "../../store/products";
import { AddRemoveBtn } from "../../components/AddRemoveBtn";

export const ProductDetails = () => {
  let { pathname } = useLocation();
  let { Id } = useParams();
  let id = Number(Id);
  const navigate = useNavigate();
  const product = products[id - 1];
  const { setLovely, lovely } = useProductsStore();
  const name = product.name;
  const currency = product.currency;
  const image = product.image;
  const price = product.price;

  const click = () => {
    let product = { id, name, currency, image, price };
    saveToLocal(product, setLovely);
  };

  const product1 = {
    name: name,
    id: id,
    currency: currency,
    image: image,
    price: price,
  };

  return (
    <Container className="pt-[20px]">
      <div className="flex flex-col justify-center items-center gap-3 pt-2">
        <div>
          <img
            className="object-cover  shadow-2xl w-[220px] h-[220px] rounded-full"
            src={product.image}
            alt="Menu"
          />
        </div>
        <div className="overflow-hidden px-2 flex flex-col  w-full text-center justify-center  items-center pb-3 mt-[20px] pt-[30px] rounded-3xl">
          {isLiked(id, lovely) ? (
            <div className="mb-3">
              <HiHeart
                onClick={() => click()}
                className="w-[30px] h-[30px] text-[#FA4A0C] cursor-pointer"
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
            {product.name}
          </p>
          <p className="whitespace-nowrap truncate overflow-hidden font-medium text-primary text-2xl mt-1">
            {product.price} {product.currency}
          </p>
          <p className="opacity-[0.8] text-start mt-2 pl-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            laudantium nulla! Tempore, magnam qui sint neque mollitia a odio
            laborum incidunt maiores vitae similique quod distinctio, unde dolor
            accusamus in nobis quasi necessitatibus aspernatur aliquam? Rem
          </p>
        </div>
        <Button
          className="bg-[#FA4A0C] text-white"
          name="Savatchaga qo'shish"
        ></Button>
        <AddRemoveBtn product={product}></AddRemoveBtn>
      </div>
    </Container>
  );
};
