import React from 'react'
import { connect } from 'react-redux'

const Order = ({ data }) => (
    <div>{data.toString()}</div>
)

const mapStateToProps = state => ({ ...state })

export default connect(
    mapStateToProps
)(Order)
