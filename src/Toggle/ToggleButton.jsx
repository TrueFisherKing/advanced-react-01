import React from "react"
import Toggle from "./Toggle/"

export default function ToggleButton({ children }) {
    const { toggle } = React.useContext(Toggle.Context)
    
    return (
        <div onClick={toggle}>
            {children}
        </div>
    )
}