import React from 'react'

const CartItem = ({ id, title, price, remove }) => (
    <article className="flex justify-between border-orange-400 border-b py-4">
        <div className="flex">
            <span>{title}</span>
            <button onClick={() => remove(id)}>Remove</button>
        </div>
        <span className="price">{price}</span>
    </article>
)

export default CartItem
