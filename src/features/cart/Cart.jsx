import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import SectionHeader from '../sectionHeader/SectionHeader'
import * as CartActions from './CartActions'

const makeItem = remove => (x, i) => <CartItem key={`${x.id}-${i}`} {...x} remove={remove} />

const Cart = ({ cart, data, removeProduct }) => (
    <>
        <SectionHeader header="Checkout" />
        <section className="bg-orange-100 p-4">
            {data.products.map(makeItem(removeProduct(cart)))}
            <CartTotal price={data.products.reduce((a, b) => a + b.price, 0)} />
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    removeProduct: cart => product => dispatch(CartActions.removeProduct(cart, product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)
