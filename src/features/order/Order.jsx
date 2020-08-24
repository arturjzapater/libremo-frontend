import React from 'react'
import { connect } from 'react-redux'
import SectionHeader from '../sectionHeader/SectionHeader'

const Order = ({ data }) => console.log(data) || (
    <>
        <SectionHeader header="Thanks for your purchase" />
        <section>
            <h3>Your Purchased Books</h3>
            <div>{data.products.map(x => x.title)}</div>
        </section>
    </>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Order)
