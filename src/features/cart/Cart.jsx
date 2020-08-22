import React from 'react'
import { connect } from 'react-redux'

const Cart = ({ data }) => (
    <>
        <h2>Your Shopping Cart</h2>
        <section className="grid grid-cols-2">
            {data.products.map(x => <React.Fragment key={x.id}>
                <span>{x.title}</span>
                <span className="price">{x.price}</span>
            </React.Fragment>)}
            <span>Total</span>
            <span className="price">{data.products.reduce((a, b) => a + b.price, 0)}</span>
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Cart)
