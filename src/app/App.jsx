import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Home from '../features/home/Home'
import Products from '../features/products/Products'

const views = {
    home: <Home />,
    products: <Products />,
}

const getView = view => views[view]

const App = ({ view }) => (
    <div className="bg-orange-200 min-h-screen">
        <Header />
        <main className="p-4">
            {getView(view)}
        </main>
    </div>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(App)
