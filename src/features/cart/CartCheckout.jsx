import React from 'react'
import { connect } from 'react-redux'
import CheckoutForm from '../checkout/CheckoutForm'
import * as CartActions from './CartActions'

const CartCheckout = ({ cart, placeOrder }) => cart.products.length > 0
    ? (
        <section className="md:grid md:grid-cols-5 mt-8">
            <CheckoutForm style="md:col-span-3" onSubmit={placeOrder(cart.id)} />
            <div className="md:col-span-2"></div>
        </section>
    )
    : null

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    placeOrder: cart => details => dispatch(CartActions.placeOrder({ ...details, cart })),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartCheckout)
