import React from 'react'
import { connect } from 'react-redux'
import NavLink from './NavLink'
import * as NavbarActions from './NavbarActions'

const Navbar = ({ cart, count, loadCart, loadHome, loadProducts }) => (
    <nav className="flex">
        <NavLink action={loadHome} text="Home" />
        <NavLink action={loadProducts} text="Products" />
        <NavLink action={loadCart(cart)} text={`Cart (${count})`} />
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
