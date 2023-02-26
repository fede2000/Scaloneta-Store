import { createContext, useState } from "react";

export const MenuContext = createContext()

export const MenuProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <MenuContext.Provider value={{
            isMenuOpen: isOpen,
            toggleMenu: handleOpen,
        }}>
            {children}
        </MenuContext.Provider>
    )}
export const CategoryContext = createContext()

export const CategoryProvider = ({children}) => {
    const [isOpenCat, setIsOpenCat] = useState(false)

    const handleOpen = () => {
        setIsOpenCat(!isOpenCat)
    }

    return(
        <CategoryContext.Provider value={{
            isCategoryOpen: isOpenCat,
            toggleCategory: handleOpen,
        }}>
            {children}
        </CategoryContext.Provider>
    )}

