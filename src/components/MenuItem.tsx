import {HiOutlineChevronRight} from 'react-icons/hi'

interface IProps {
    name: string,
    link: string
}

export const MenuItem = ({name, link}: IProps) => {
    return (
        <div className='w-full cursor-pointer px-6 py-4 flex justify-between items-center bg-white shadow rounded-2xl'>
            <p className='text-base'>{name}</p>
            <HiOutlineChevronRight/>
        </div>
    )
}