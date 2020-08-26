import React from 'react'
import Button from '../button/Button'

const ItemQuantity = ({ quantity, update }) => (
    <div className="mx-2">
        <Button onClick={() => update((quantity - 1) || 1)} label="-" type="small" />
        <span className="mx-1">{quantity}</span>
        <Button onClick={() => update(quantity + 1)} label="+" type="small" />
    </div>
)

export default ItemQuantity
