import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Cart from '../features/cart/Cart'
import Home from '../features/home/Home'
import Products from '../features/products/Products'
import Warning from '../features/warning/Warning'

const views = {
    cart: <Cart />,
    home: <Home />,
    products: <Products />,
}

const getCart = () =>
    dispatch =>
        fetch('/api/carts', { method: 'POST' })
            .then(res => res.json())
            .then(({ id }) => dispatch({
                type: 'SET_CART',
                payload: {
                    cart: id,
                },
            }))

const getView = view => views[view]

const App = ({ cart, view, getCart }) => {
    useEffect(() => {
        getCart()
        return () => fetch(`/api/carts/${cart}`, { method: 'DELETE' })
    }, [])

    return (
        <div className="bg-orange-200 min-h-screen">
            <Header />
            <main className="p-4">
                <Warning />
                {getView(view)}
            </main>
        </div>
    )
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    getCart: () => dispatch(getCart()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
