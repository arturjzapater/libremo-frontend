import React from 'react'

const Input = ({ label, name, value, onChange }) => (
    <label className="flex my-1">
        <span className="w-1/4 text-gray-700 text-sm">{label}</span>
        <input className="w-3/4 p-1" type="text" name={name} value={value} onChange={onChange} />
    </label>
)

export default Input
