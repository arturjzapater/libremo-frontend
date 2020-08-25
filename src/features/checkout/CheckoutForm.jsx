import React, { useState } from 'react'
import Button from '../button/Button'
import Input from './Input'
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
            <Input label="Name:" name="name" value={name} onChange={handleChange(setName)} />
            <Input label="C/O:" name="c_o" value={co} onChange={handleChange(setCo)} />
            <Input label="Delivery address:" name="address" value={address} onChange={handleChange(setAddress)} />
            <Input label="Postal code:" name="postal_code" value={postalCode} onChange={handleChange(setPostalCode)} />
            <Input label="Email address:" name="email" value={email} onChange={handleChange(setEmail)} />
            <Input label="Phone number:" name="phone" value={phone} onChange={handleChange(setPhone)} />
            <Button onClick={handleSubmit} label="Place Order" style="mt-4" />
        </form>
    )
}

export default CheckoutForm
