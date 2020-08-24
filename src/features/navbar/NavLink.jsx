import React from 'react'

const NavLink = ({ text, action }) => (
    <button onClick={action} className="mx-2">
        {text}
    </button>
)

export default NavLink
