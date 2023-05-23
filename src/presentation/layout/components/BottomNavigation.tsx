import {HiOutlineHeart, HiHome, HiOutlineUser} from 'react-icons/hi'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useProductsStore} from "../../../store/products";

export const BottomNavigation = () => {
    const navigate = useNavigate()
    const {lovely} = useProductsStore()
    const IOS = !!navigator.platform.match(/iPhone|iPod|iPad/);

    const onClick = (url: string) => {
        navigate(url)
    }
    const isActive = (url: string) => {
        const pathName = window.location.pathname
        return pathName.includes(url)
    }

    return (
        <div className={`flex justify-between px-6 py-4`}>
            <div className='cursor-pointer relative' onClick={() => onClick('/lovely')}><HiOutlineHeart
                className={`text-lightnd w-[22px] h-[22px] ${isActive('/lovely') && 'text-primary'}`}/>
                {lovely?.length > 0 && <div
                    className='absolute top-[-10px] rounded-full right-[-10px] bg-red-600 w-[20px] h-[20px] flex justify-center items-center'>
                    <p
                        className='text-sm px-1 text-white'>{lovely?.length}</p></div>}
            </div>
            <div className='cursor-pointer' onClick={() => onClick('/main')}><HiHome
                className={`text-lightnd w-[22px] h-[22px] ${isActive('/main') && 'text-primary'}`}/>
            </div>
            <div className='cursor-pointer' onClick={() => onClick('/profile')}><HiOutlineUser
                className={`text-lightnd w-[22px] h-[22px] ${isActive('/profile') && 'text-primary'}`}/>
            </div>
        </div>
    )
}