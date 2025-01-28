import React from 'react'
import clsx from 'clsx';

export default function Button({ children, className, size, ...rest }) {
    const allClasses = clsx(className, 'black-text');
    return (
        <button
        {...rest}
        className={allClasses}
        >
            {children}
        </button>
    )
}
