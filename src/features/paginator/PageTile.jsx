import React from 'react'

const types = {
    base: 'border border-gray-500 py-1 px-3',
    current: 'bg-gray-200 text-gray-800',
    default: 'bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-800',
}

const PageTile = ({ label, onClick = () => {}, type = 'default' }) => (
    <button onClick={onClick} className={`${types.base} ${types[type]}`}>
        {label}
    </button>
)

export default PageTile
