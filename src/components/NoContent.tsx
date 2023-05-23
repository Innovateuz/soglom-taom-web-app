import {cartIcon} from "../assets/icons";
import {Button} from "./Button";
import {useNavigate} from "react-router-dom";

export const NoContent = () => {
    const navigate = useNavigate()

    return (
        <div className='w-full flex justify-center items-center flex-col'>
            {cartIcon()}
            <p>You havn't choose any thing :(</p>
            <Button onClick={() => navigate('/main')} name='Go To Shop'
                    className='bg-primary text-white mt-4'/>
        </div>
    )
}