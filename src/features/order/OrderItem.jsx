import React from 'react'

const OrderItem = ({ title, quantity, price }) => (
    <>
        <h2>{title}</h2>
        <span>{quantity} x</span>
        <span className="price">{price}</span>
        <span className="price text-right">{price * quantity}</span>
    </>
)

export default OrderItem
