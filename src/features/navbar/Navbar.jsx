import React from 'react'
import { connect } from 'react-redux'
import * as NavbarActions from './NavbarActions'

const Navbar = ({ loadHome, loadProducts }) => (
    <nav className="flex">
        <button onClick={loadHome}>Home</button>
        <button onClick={loadProducts}>Products</button>
    </nav>
)

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
    loadHome: () => dispatch(NavbarActions.loadHome()),
    loadProducts: () => dispatch(NavbarActions.loadProducts()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)
