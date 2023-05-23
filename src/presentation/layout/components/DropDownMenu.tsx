import {AccountCard} from "../../../components/AccountCard";
import {account, links} from "../../../mocks/account";
import {MenuItem} from "../../../components/MenuItem";
import {Button} from "../../../components/Button";
import {HiPhoneOutgoing} from "react-icons/hi";
import {useEffect} from "react";

interface IProps {
    isOpen: boolean
}

export const DropDownMenu = ({isOpen}: IProps) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [isOpen])

    return (
        <div
            className={`absolute top-0 h-full max-w-[580px] w-full mx-auto flex justify-center px-3 z-[12] ${isOpen ? 'translate-x-[0%]' : 'translate-x-[-300%]'}`}
            style={{background: '#fff', transition: '0.5s linear'}}>
            <div className='w-full z-[12]'>
                <AccountCard image={account.image} fullName={account.name} username={account.username}/>
                <div className='flex flex-col gap-3 pt-4'>
                    {links.map((i) => (
                        <MenuItem name={i.name} link={i.link}/>
                    ))}
                </div>
                <div className='w-full flex justify-center items-center mt-10'>
                    <Button name='Call To Admin' className='bg-white shadow max-w-[240px]'
                            icon={<HiPhoneOutgoing/>}/>
                </div>
            </div>
        </div>
    )
}