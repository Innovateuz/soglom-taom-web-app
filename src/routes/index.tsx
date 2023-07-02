import { Route, Routes } from "react-router-dom";
import { Layout } from "../presentation/layout/View";
import { Home } from "../presentation/home/View";
import { Lovely } from "../presentation/lovely/View";
import { Profile } from "../presentation/profile/View";
import { Cart } from "../presentation/cart/Cart";
import { ProductDetails } from "../presentation/details/ProductDetails";
import { UpdateAccaunt } from "../presentation/profile/components/UodateAccaunt";
import { Order } from "../presentation/order";
import { LangPage } from "../presentation/layout/components/LangPage";
import { FAQs } from "../presentation/layout/components/FAQs";
import { Location } from "../presentation/location/Location";
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
      <Route path="/language" element={<LangPage />}></Route>
      <Route path="/faq" element={<FAQs />}></Route>
      <Route path="/location" element={<Location />}></Route>
    </Routes>
  );
};
