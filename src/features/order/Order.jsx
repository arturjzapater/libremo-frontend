import React from 'react'
import { connect } from 'react-redux'
import SectionHeader from '../sectionHeader/SectionHeader'

const Order = ({ data }) => console.log(data) || (
    <>
        <SectionHeader header="Thanks for your purchase!" />
        <section className="bg-gray-100 p-8 mt-12">
            <h3 className="italic text-sm">Your Purchased Books</h3>
            <ul>{data.products.map(x => <li key={x.id}>{x.title}</li>)}</ul>
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Order)
