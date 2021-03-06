import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Cart from '../features/cart/Cart'
import Home from '../features/home/Home'
import Order from '../features/order/Order'
import Products from '../features/products/Products'
import * as AppActions from './AppActions'
import Warning from '../features/warning/Warning'

const views = {
    cart: <Cart />,
    error: <Warning text="Oops, something went wrong!" />,
    home: <Home />,
    order: <Order />,
    products: <Products />,
}

const getView = view => views[view]

const App = ({ cart, view, getCart }) => {
    useEffect(() => {
        if (!cart.id) getCart()
    }, [ view ])

    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <main className="p-4 md:px-10 lg:px-20">
                {getView(view)}
            </main>
        </div>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    getCart: () => dispatch(AppActions.getCart()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
