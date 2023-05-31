import {HiHeart, HiOutlineHeart} from "react-icons/hi";
import {saveToLocal} from "../utils/lovely";
import {useEffect, useState} from "react";
import {useProductsStore} from "../store/products";

interface IProps {
  id: number,
  name: string,
  price: number,
  currency: string,
  image: string
}

export const ProductItem = ({id, name, currency, image, price}: IProps) => {
  const [isLikedProduct, setIsLikedProduct] = useState(false)
  const {setLovely, lovely} = useProductsStore()
  const click = () => {
    let product = {id, name, currency, image, price}
    saveToLocal(product, setLovely)
  }

  useEffect(() => {
    setIsLikedProduct(lovely?.some((el: any) => el.id === id))
  }, [id, lovely])

  return (
    <div className='relative w-[152px] flex flex-col justify-center items-center gap-3'>
      <div className='absolute top-0 z-[11]'>
        <img className='object-cover products-img shadow-xl w-[128px] h-[128px] rounded-full' src={image}
             alt="product"/>
      </div>
      <div
        className='px-2 overflow-hidden z-[10] shadow-2xl w-full text-center items-center pt-[80px] mt-[58px] pb-3 rounded-3xl'>
        <p className='whitespace-nowrap truncate overflow-hidden overflow-ellipsis text-2xl'>{name}</p>
        <p
          className='whitespace-nowrap truncate overflow-hidden overflow-ellipsis font-medium text-primary mt-1'>{price} {currency}</p>
        <div className='flex justify-center items-center mt-2'>
          {isLikedProduct ? (
            <HiHeart onClick={() => click()}
                     className={`text-primary cursor-pointer w-[20px] h-[20px]`}/>
          ) : (
            <HiOutlineHeart onClick={() => click()}
                            className={`text-primary cursor-pointer w-[20px] h-[20px]`}/>
          )}
        </div>

      </div>
    </div>
  )
}