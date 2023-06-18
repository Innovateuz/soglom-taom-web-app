interface IProps {
    fullName: string
    username: string
    image: string
}

export const AccountCard = ({image, fullName, username}: IProps) => {
    return (
        <div className='w-full rounded-2xl bg-white shadow flex items-center gap-4 p-4 mt-3'>
            <div>
                <img className='w-[70px] h-[70px] rounded-lg' src={image} alt={image}/>
            </div>
            <div>
                <p className='text-[18px] font-medium'>{fullName}</p>
                <p className='text-base text-primary'>@{username}</p>
            </div>
        </div>
    )
}