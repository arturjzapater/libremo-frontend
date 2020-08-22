import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import * as ProductActions from './ProductsActions'

const makeItem = addFn => x => <ProductItem key={x.id} addFn={addFn} {...x} />

const Products = ({ cart, data, addProduct }) => (
    <>
        {data.map(makeItem(addProduct(cart)))}
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    addProduct: cart => product => dispatch(ProductActions.addProduct(cart, product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
