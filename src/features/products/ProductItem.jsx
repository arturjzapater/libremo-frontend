import React from 'react'

const ProductItem = props => (
    <article className="bg-orange-100 m-4 p-6 shadow">
        <h2 className="text-xl">{props.title}</h2>
        <span>{props.author}</span>
        <button onClick={() => props.addFn(props.id)}>Add to Cart</button>
        <ul className="text-sm">
            <li>Pages: {props.pages}</li>
            <li className="price">Price: {props.price}</li>
            <li>Dimensions: {props.length} mm x {props.width} mm</li>
        </ul>
        <p>{props.description}</p>
    </article>
)

export default ProductItem
