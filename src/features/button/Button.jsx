import React from 'react'

const types = {
    base: 'text-white hover:bg-gray-300 hover:text-black transition duration-300',
    normal: 'bg-gray-900 rounded p-2',
    small: 'bg-gray-600 rounded px-2 text-sm text-center',
    round: 'bg-gray-900 rounded-full px-2 text-sm text-center',
}

const Button = ({ label, onClick, style = '', type = 'normal' }) => (
    <button onClick={onClick} className={`${types.base} ${types[type]} ${style}`}>
        {label}
    </button>
)

export default Button
