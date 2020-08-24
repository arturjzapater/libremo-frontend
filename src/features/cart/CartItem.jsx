import React from 'react'
import Button from '../button/Button'

const CartItem = ({ id, cover, title, price, remove }) => (
    <article className="flex justify-between border-gray-400 border-b py-4">
        <img src={cover} className='checkout-img mr-4' />
        <div className="flex flex-col flex-grow md:flex-row justify-between items-stretch md:items-center">
            <span className="text-sm md:text-base">{title}</span>
            <div className="flex justify-between">
                <Button onClick={() => remove(id)} label="x" type="round" style="mx-2" />
                <span className="price">{price}</span>
            </div>
        </div>
    </article>
)

export default CartItem
