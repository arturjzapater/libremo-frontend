import React from 'react'
import PageTile from './PageTile'

const makeTile = (current, load) => (_, i) => {
    const page = i + 1
    const [ onClick, type, disabled ] = current === page
        ? [ undefined, 'current', true ]
        : [ () => load(page), undefined, false ]

    return (
        <PageTile
            key={`page-${page}`}
            label={page}
            onClick={onClick}
            type={type}
            disabled={disabled}
        />
    )
}

const Paginator = ({ pages, current, load }) => (
    <div className="flex flex-wrap justify-start">
        {Array.from({ length: pages }, makeTile(current, load))}
    </div>
)

export default Paginator
