import React from 'react'

const classes = 'bg-orange-900 rounded p-2 text-white hover:bg-orange-300 hover:text-black transition duration-300'

const Button = ({ label, onClick, style = '' }) => (
    <button onClick={onClick} className={`${classes} ${style}`}>
        {label}
    </button>
)

export default Button
