import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import * as CartActions from './CartActions'
import getTotalPrice from '../../lib/getTotalPrice'

const makeItem = (remove, update) =>
    (x, i) =>
        <CartItem key={`${x.id}-${i}`} {...x} remove={remove} update={update} />

const CartItemList = ({ cart, removeProduct, updateQuantity }) => (
    <section className="bg-gray-100 p-4">
        {cart.products.map(makeItem(removeProduct(cart.id), updateQuantity(cart.id)))}
        <CartTotal price={getTotalPrice(cart.products)} />
    </section>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    removeProduct: cart => product => dispatch(CartActions.removeProduct(cart, product)),
    updateQuantity: cart => product => quantity => dispatch(CartActions.updateQuantity(cart, product, quantity)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItemList)
