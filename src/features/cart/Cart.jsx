import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import CheckoutForm from '../checkout/CheckoutForm'
import SectionHeader from '../sectionHeader/SectionHeader'
import * as CartActions from './CartActions'

const addPrice = (acc, item) => acc + item.price * item.quantity

const makeItem = (remove, update) =>
    (x, i) =>
        <CartItem key={`${x.id}-${i}`} {...x} remove={remove} update={update} />

const Cart = ({ cart, placeOrer, removeProduct, updateQuantity }) => (
    <>
        <SectionHeader header="Checkout" />
        <section className="bg-gray-100 p-4">
            {cart.products.map(makeItem(removeProduct(cart.id), updateQuantity(cart.id)))}
            <CartTotal price={cart.products.reduce(addPrice, 0)} />
        </section>
        <section className="md:grid md:grid-cols-5 mt-8">
            <CheckoutForm style="md:col-span-3" onSubmit={placeOrer(cart.id)} />
            <div className="md:col-span-2"></div>
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    placeOrer: cart => details => dispatch(CartActions.placeOrder({ ...details, cart })),
    removeProduct: cart => product => dispatch(CartActions.removeProduct(cart, product)),
    updateQuantity: cart => product => quantity => dispatch(CartActions.updateQuantity(cart, product, quantity)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
