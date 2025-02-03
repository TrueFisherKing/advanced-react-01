import React from "react"
import Toggle from "../Toggle/"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const menuId = React.useContext(MenuContext)
    return (
        <Toggle.On>
            <div
                id={menuId}
                className="menu-dropdown"
            >
                {children}
            </div>
        </Toggle.On>
    )
}