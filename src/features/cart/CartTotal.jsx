import React from 'react'

const CartTotal = ({ price }) => (
    <article className="flex justify-between py-2">
        <span className="text-gray-700">Total to pay</span>
        <span className="price">{price}</span>
    </article>
)

export default CartTotal
