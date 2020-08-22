const makeOpts = product => ({
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product }),
})

const addProduct = (cart, product) => dispatch => {
    fetch(`/api/carts/${cart}`, makeOpts(product))
        .then(res => res.json())
        .then(({ count }) => dispatch({
            type: 'UPDATE_COUNT',
            payload: {
                count,
            },
        }))
}

export {
    addProduct
}
