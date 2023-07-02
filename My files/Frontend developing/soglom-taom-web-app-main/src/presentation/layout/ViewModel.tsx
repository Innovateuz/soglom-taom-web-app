import {useState} from "react";

export const useViewModel = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropDown = () => setIsOpen(prevState => !prevState)

    return {
        toggleDropDown,
        isOpen
    }
}