import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import * as ProductActions from './ProductsActions'
import SectionHeader from '../sectionHeader/SectionHeader'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus expedita cupiditate nam maxime, cumque et perferendis quod earum magni.'

const makeItem = (cart, addFn) => x => <ProductItem key={x.id} cart={cart} addFn={addFn} {...x} />

const Products = ({ cart, products, addProduct }) => (
    <>
        <SectionHeader header="Books" text={text} />
        {products.map(makeItem(cart, addProduct))}
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    addProduct: (cart, product) => dispatch(ProductActions.addProduct(cart, product)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
