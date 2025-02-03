import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"
import Toggle  from "../Toggle/"

export default function MenuButton({ children }) {
    const menuId = React.useContext(MenuContext)
    const { on } = React.useContext(Toggle.Context)

    return (
        <Toggle.Button>
            <Button
                aria-controls={menuId}
                aria-expanded={on}
                aria-haspopup="true"
                size="lg"
                variant="success"
            >
                {children}
            </Button>
        </Toggle.Button>
    )
}