import path from "path";
import { HiMenuAlt1, HiMenuAlt3, HiOutlineShoppingCart } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

interface IProps {
  isOpen: boolean;
  toggleDropDown: any;
}

export const Topbar = ({ toggleDropDown, isOpen }: IProps) => {
  const navigate = useNavigate();
  const isProductDetailsPage = !window.location.pathname.includes("/main");

  const burgerIcon = isOpen ? (
    <div onClick={toggleDropDown?.bind(null)}>
      <HiMenuAlt1 className="text-gray-600 cursor-pointer w-[22px] h-[22px]" />
    </div>
  ) : (
    <div onClick={toggleDropDown?.bind(null)}>
      <HiMenuAlt3 className="text-gray-600 cursor-pointer w-[22px] h-[22px]" />
    </div>
  );

  return (
    <div className="flex justify-between items-center w-full px-4 pt-3 pb-6">
      {isProductDetailsPage && (
        <div>
          <IoIosArrowBack
            className="cursor-pointer w-[25px] h-[25px] text-gray-600"
            onClick={() => navigate("/main")}
          />
        </div>
      )}

      {!isProductDetailsPage && burgerIcon}

      <div>
        <HiOutlineShoppingCart
          onClick={() => navigate("cart")}
          className="text-gray-600 w-[22px] h-[22px] cursor-pointer"
        />
      </div>
    </div>
  );
};
