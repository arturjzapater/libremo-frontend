import React from 'react'
import { connect } from 'react-redux'
import Paginator from '../paginator/Paginator'
import ProductItem from './ProductItem'
import SectionHeader from '../sectionHeader/SectionHeader'
import * as ProductActions from './ProductsActions'

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusamus expedita cupiditate nam maxime, cumque et perferendis quod earum magni.'

const makeItem = (cart, addFn) => x => <ProductItem key={x.id} cart={cart} addFn={addFn} {...x} />

const Products = ({ cart, products, addProduct, loadPage }) => (
    <>
        <SectionHeader header="Books" text={text} />
        <Paginator pages={products.last} current={products.page} load={loadPage} />
        {products.data.map(makeItem(cart, addProduct))}
        <Paginator pages={products.last} current={products.page} load={loadPage} />
    </>
)

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    addProduct: (cart, product) => dispatch(ProductActions.addProduct(cart, product)),
    loadPage: page => dispatch(ProductActions.loadPage(page)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)
