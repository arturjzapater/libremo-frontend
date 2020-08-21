import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

const Products = ({ data }) => (
    <>
        {data.map(x => <ProductItem key={x.id} {...x} />)}
    </>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Products)
