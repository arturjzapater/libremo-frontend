import React from 'react'

const SectionHeader = ({ header, text }) => (
    <header className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-xl">{header}</h2>
        {text && <p className="text-sm text-gray-700 text-center md:w-3/5 lg:w-2/5">{text}</p>}
    </header>
)

export default SectionHeader
