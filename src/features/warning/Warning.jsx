import React from 'react'

const def = 'This is not a real shopping website. It was built as a coding exercise.'

const Warning = ({ text = def }) => (
    <div className='text-sm italic text-red-600 my-2'>
        {text}
    </div>
)

export default Warning
