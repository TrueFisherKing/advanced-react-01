import React from "react"

const MenuContext = React.createContext()
export default function Menu({ children }) {

    const [open, setOpen] = React.useState(false)
    const menuId = React.useId()

    return (
        <MenuContext.Provider value={{ menuId, open, setOpen }}>
            <div className="menu" role="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }