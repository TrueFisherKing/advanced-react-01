import React from "react"
import Toggle from "../Toggle/"

const MenuContext = React.createContext()

export default function Menu({ children, onChange = ()=>{} }) {

    const menuId = React.useId()

    return (
        <Toggle onToggle={onChange}>
            <MenuContext.Provider value={menuId}>
                <div className="menu" role="menu">
                    {children}
                </div>
            </MenuContext.Provider>
        </Toggle>
    )
}

export { MenuContext }