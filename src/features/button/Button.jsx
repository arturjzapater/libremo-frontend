import React from 'react'

const types = {
    base: 'bg-gray-900 text-white hover:bg-gray-300 hover:text-black transition duration-300',
    normal: 'rounded p-2',
    round: 'rounded-full px-2 text-sm text-center',
}

const Button = ({ label, onClick, style = '', type = 'normal' }) => (
    <button onClick={onClick} className={`${types.base} ${types[type]} ${style}`}>
        {label}
    </button>
)

export default Button
