import React from 'react'
import Button from '../button/Button'
import ItemPrice from './ItemPrice'
import ItemQuantity from './ItemQuantity'

const CartItem = ({ id, cover, title, price, quantity, remove, update }) => (
    <article className="flex justify-between border-gray-400 border-b py-4">
        <img src={cover} className='checkout-img mr-4' />
        <div className="flex flex-col flex-grow md:flex-row justify-between items-stretch md:items-center">
            <span className="text-sm md:text-base">{title}</span>
            <div className="flex flex-grow justify-between self-center">
                <ItemQuantity quantity={quantity} update={update(id)} />
                <Button onClick={() => remove(id)} label="x" type="round" style="mx-2" />
                <ItemPrice price={price} quantity={quantity} />
            </div>
        </div>
    </article>
)

export default CartItem
