import React from 'react'
import Button from '../button/Button'

const ProductItem = props => (
    <article className="bg-gray-100 m-4 p-6 shadow grid grid-cols-4 gap-1">
        <img src={props.cover} />
        <div className="col-span-3 flex flex-col items-start">
            <h2 className="text-xl">{props.title}</h2>
            <span>{props.author}</span>
            <Button onClick={() => props.addFn(props.id)} label="Add to Cart" style="my-4" />
            <ul className="text-sm">
                <li>Pages: {props.pages}</li>
                <li className="price">Price: {props.price}</li>
                <li>Dimensions: {props.length} mm x {props.width} mm</li>
            </ul>
        </div>
        <p className="col-span-4">{props.description}</p>
    </article>
)

export default ProductItem
