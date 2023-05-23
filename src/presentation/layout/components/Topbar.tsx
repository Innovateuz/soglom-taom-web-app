import {HiMenuAlt1, HiMenuAlt3, HiOutlineShoppingCart} from "react-icons/hi";

interface IProps {
    isOpen: boolean
    toggleDropDown: any
}

export const Topbar = ({toggleDropDown, isOpen}: IProps) => {
    return (
        <div className='flex justify-between items-center w-full px-4 pt-3 pb-6'>
            {isOpen ? (
                <div onClick={toggleDropDown?.bind(null)}><HiMenuAlt1
                    className='text-gray-600 cursor-pointer w-[22px] h-[22px]'/>
                </div>
            ) : (
                <div onClick={toggleDropDown?.bind(null)}><HiMenuAlt3
                    className='text-gray-600 cursor-pointer w-[22px] h-[22px]'/>
                </div>
            )}
            {/*<p className='font-medium'>Sog'lom <span className='text-primary'>Taom</span></p>*/}
            <div><HiOutlineShoppingCart className='text-gray-600 w-[22px] h-[22px]'/></div>
        </div>
    )
}