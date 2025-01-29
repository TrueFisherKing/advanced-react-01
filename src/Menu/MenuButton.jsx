import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {
    const { menuId, open, setOpen } = React.useContext(MenuContext)
    
    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <Button
            aria-controls={menuId}
            aria-expanded={open}
            aria-haspopup="true"
            onClick={toggle}
            size="lg"
            variant={"success"}
        >
            {children}
        </Button>
    )
}