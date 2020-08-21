import React from 'react'

const ProductItem = product => (
    <article className="bg-orange-100 m-4 p-6 shadow">
        <h2 className="text-xl">{product.title}</h2>
        <span>{product.author}</span>
        <ul className="text-sm">
            <li>Pages: {product.pages}</li>
            <li>Price: {product.price}</li>
            <li>Dimensions: {product.length} mm x {product.width} mm</li>
        </ul>
        <p>{product.description}</p>
    </article>
)

export default ProductItem
