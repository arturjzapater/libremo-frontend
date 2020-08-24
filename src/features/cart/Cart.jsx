import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import CheckoutForm from '../checkout/CheckoutForm'
import SectionHeader from '../sectionHeader/SectionHeader'
import * as CartActions from './CartActions'

const makeItem = remove => (x, i) => <CartItem key={`${x.id}-${i}`} {...x} remove={remove} />

const Cart = ({ cart, data, placeOrer, removeProduct }) => (
    <>
        <SectionHeader header="Checkout" />
        <section className="bg-orange-100 p-4">
            {data.products.map(makeItem(removeProduct(cart)))}
            <CartTotal price={data.products.reduce((a, b) => a + b.price, 0)} />
        </section>
        <section className="grid grid-cols-5">
            <div className="col-span-2"></div>
            <CheckoutForm style="col-span-3" onSubmit={placeOrer(cart)} />
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    placeOrer: cart => details => dispatch(CartActions.placeOrder({ ...details, cart })),
    removeProduct: cart => product => dispatch(CartActions.removeProduct(cart, product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
