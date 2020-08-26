import React from 'react'

const ItemPrice = ({ price, quantity }) => (
    <span className="price flex-grow text-right">{price * quantity}</span>
)

export default ItemPrice
