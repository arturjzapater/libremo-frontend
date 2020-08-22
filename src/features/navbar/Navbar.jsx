import React from 'react'
import { connect } from 'react-redux'
import * as NavbarActions from './NavbarActions'

const Navbar = ({ cart, count, loadCart, loadHome, loadProducts }) => (
    <nav className="flex">
        <button onClick={loadHome}>Home</button>
        <button onClick={loadProducts}>Products</button>
        <button onClick={loadCart(cart)}>Cart ({count})</button>
    </nav>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    loadCart: cart => () => dispatch(NavbarActions.loadCart(cart)),
    loadHome: () => dispatch(NavbarActions.loadHome()),
    loadProducts: () => dispatch(NavbarActions.loadProducts()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)
