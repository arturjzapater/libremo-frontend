import React from 'react'
import CartCheckout from './CartCheckout'
import CartItemList from './CartItemList'
import SectionHeader from '../sectionHeader/SectionHeader'

const Cart = () => (
    <>
        <SectionHeader header="Checkout" />
        <CartItemList />
        <CartCheckout />
    </>
)

export default Cart
