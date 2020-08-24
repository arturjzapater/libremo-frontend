import React from 'react'

const Input = ({ label, name, value, onChange }) => (
    <label className="flex my-1">
        <span className="w-1/4 text-gray-800 text-sm">{label}</span>
        <input className="w-3/4 p-1 border border-gray-400 focus:border-gray-700" type="text" name={name} value={value} onChange={onChange} />
    </label>
)

export default Input
