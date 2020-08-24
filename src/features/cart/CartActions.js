const makeOpts = (method, body) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
})

const placeOrder = details => dispatch => {
    localStorage.removeItem('cart')
    fetch('/api/orders', makeOpts('POST', details))
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_ORDER',
            payload: {
                data,
            },
        }))
}

const removeProduct = (cart, product) => dispatch => {
    fetch(`/api/carts/${cart}/?action=delete`, makeOpts('PUT', { product }))
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_CART',
            payload: {
                data,
            },
        }))
}

export {
    placeOrder,
    removeProduct
}
