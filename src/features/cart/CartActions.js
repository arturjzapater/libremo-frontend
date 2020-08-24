const makeOpts = product => ({
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product }),
})

const removeProduct = (cart, product) => dispatch => {
    fetch(`/api/carts/${cart}/?action=delete`, makeOpts(product))
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_CART',
            payload: {
                data,
            },
        }))
}

export {
    removeProduct
}
