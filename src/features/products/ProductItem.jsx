import React from 'react'
import Button from '../button/Button'

const ProductItem = props => (
    <article className="bg-orange-100 m-4 p-6 shadow flex flex-col items-start">
        <h2 className="text-xl">{props.title}</h2>
        <span>{props.author}</span>
        <Button onClick={() => props.addFn(props.id)} label="Add to Cart" />
        <ul className="text-sm">
            <li>Pages: {props.pages}</li>
            <li className="price">Price: {props.price}</li>
            <li>Dimensions: {props.length} mm x {props.width} mm</li>
        </ul>
        <p>{props.description}</p>
    </article>
)

export default ProductItem
