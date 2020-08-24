import React, { useState } from 'react'
import Input from './Input'
import Warning from '../warning/Warning'
import validate from './validate'

const handleChange = fn => event => fn(event.target.value)

const CheckoutForm = ({ style = '', onSubmit }) => {
    const [ name, setName ] = useState('')
    const [ co, setCo ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ postalCode, setPostalCode ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        const request = {
            name,
            c_o: co,
            address,
            postal_code: postalCode,
            email,
            phone,
        }
        if (validate(request)) onSubmit(request)
    }

    return (
        <form className={`flex flex-col items-stretch ${style}`}>
            <Warning text="Do not enter real information. This is a mock website." />
            <Input label="Name:" name="name" value={name} onChange={handleChange(setName)} />
            <Input label="C/O:" name="c_o" value={co} onChange={handleChange(setCo)} />
            <Input label="Delivery address:" name="address" value={address} onChange={handleChange(setAddress)} />
            <Input label="Postal code:" name="postal_code" value={postalCode} onChange={handleChange(setPostalCode)} />
            <Input label="Email address:" name="email" value={email} onChange={handleChange(setEmail)} />
            <Input label="Phone number:" name="phone" value={phone} onChange={handleChange(setPhone)} />
            <button type="submit" onClick={handleSubmit}>Place Order</button>
        </form>
    )
}

export default CheckoutForm
