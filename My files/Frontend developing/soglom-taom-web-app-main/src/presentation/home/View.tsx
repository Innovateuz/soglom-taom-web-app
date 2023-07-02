import { Container } from "../../components/Container";
import { products } from "../../mocks/products";
import { ProductItem } from "../../components/ProductItem";
import { useLocation, useParams } from "react-router-dom";

export const Home = () => {
  let { pathname } = useLocation();

  return (
    <Container>
      <div className="w-full flex flex-wrap justify-center gap-5 pt-8 pb-7">
        {products.map((i) => (
          <ProductItem
            id={i.id}
            key={i.id}
            name={i.name}
            price={i.price}
            currency={i.currency}
            image={i.image}
            path={pathname}
          />
        ))}
      </div>
    </Container>
  );
};
