import React from 'react'

const types = {
    base: 'border border-gray-500 py-1 px-3',
    current: 'bg-gray-200 text-gray-800 cursor-default',
    default: 'bg-gray-900 text-white hover:bg-gray-200 hover:text-gray-800',
}

const PageTile = ({ label, onClick = () => {}, type = 'default', disabled = false }) => (
    <button
        onClick={onClick}
        className={`page-tile ${types.base} ${types[type]}`}
        disabled={disabled}
    >
        {label}
    </button>
)

export default PageTile
