import React from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'
import SectionHeader from '../sectionHeader/SectionHeader'
import getTotalPrice from '../../lib/getTotalPrice'

const makeItem = x => <OrderItem key={x.id} {...x} />

const Order = ({ order }) => (
    <>
        <SectionHeader header="Thanks for your purchase!" />
        <section className="bg-gray-100 p-8 mt-12">
            <h3 className="italic text-sm">Your Purchased Books</h3>
            <div className="grid grid-cols-order">
                {order.products.map(makeItem)}
                <span className="text-gray-700 col-span-4 text-right price">
                    TOTAL: {getTotalPrice(order.products)}
                </span>
            </div>
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Order)
