import React from 'react'
import Button from '../button/Button'

const CartItem = ({ id, cover, title, price, remove }) => (
    <article className="flex justify-between border-gray-400 border-b py-4">
        <div className="flex items-center">
            <img src={cover} className='checkout-img mr-4' />
            <span>{title}</span>
            <Button onClick={() => remove(id)} label="x" type="round" style="mx-2" />
        </div>
        <span className="price">{price}</span>
    </article>
)

export default CartItem
