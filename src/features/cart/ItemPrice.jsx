import React from 'react'

const ItemPrice = ({ price, quantity }) => (
    <div className="flex-grow flex justify-end items-center">
        <span className="text-gray-700 text-sm mr-4">({quantity} x {price})</span>
        <span className="price">{price * quantity}</span>
    </div>
)

export default ItemPrice
