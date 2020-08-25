import React from 'react'
import Button from '../button/Button'
import ItemInCart from './ItemInCart'

const ProductItem = ({
    cover,
    title,
    author,
    id,
    pages,
    price,
    length,
    width,
    description,
    cart,
    addFn,
}) => (
    <article className="bg-gray-100 m-4 p-6 shadow md:grid md:grid-cols-products md:gap-2">
        <img src={cover} />
        <div className="flex flex-col items-start">
            <h2 className="text-xl">{title}</h2>
            <span>{author}</span>
            {cart.products.some(x => x.id === id)
                ? <ItemInCart />
                : <Button onClick={() => addFn(cart.id, id)} label="Add to Cart" style="my-4" />
            }
            <ul className="text-sm">
                <li>Pages: {pages}</li>
                <li className="price">Price: {price}</li>
                <li>Dimensions: {length} mm x {width} mm</li>
            </ul>
        </div>
        <p className="md:col-span-2">{description}</p>
    </article>
)

export default ProductItem
