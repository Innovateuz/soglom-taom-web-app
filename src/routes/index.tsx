import { Route, Routes } from "react-router-dom";
import { Layout } from "../presentation/layout/View";
import { Home } from "../presentation/home/View";
import { Lovely } from "../presentation/lovely/View";
import { Profile } from "../presentation/profile/View";
import { Cart } from "../presentation/cart/Cart";
import { ProductDetails } from "../presentation/details/ProductDetails";
import { UpdateAccaunt } from "../presentation/profile/components/UodateAccaunt";
import { Order } from "../presentation/order";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/main" element={<Home />} />
        <Route path="/lovely" element={<Lovely />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile/update" element={<UpdateAccaunt />} />

        {/*<Route path="about" element={<About/>}/>*/}
        {/*<Route path="dashboard" element={<Dashboard/>}/>*/}

        {/*/!* Using path="*"" means "match anything", so this route*/}
        {/*acts like a catch-all for URLs that we don't have explicit*/}
        {/*routes for. *!/*/}
        {/*<Route path="*" element={<NoMatch/>}/>*/}
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
