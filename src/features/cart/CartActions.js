const makeOpts = (method, body) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
})

const placeOrder = details => dispatch => {
    fetch('/api/orders', makeOpts('POST', details))
        .then(res => {
            if (!res.ok) return Promise.reject()
            return res.json()
        })
        .then(data => {
            localStorage.removeItem('cart')
            dispatch({
                type: 'LOADED_ORDER',
                payload: {
                    data,
                },
            })
        })
        .catch(() => dispatch({ type: 'ERRORED' }))
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
        .catch(() => dispatch({ type: 'ERRORED' }))
}

const updateQuantity = (cart, product, quantity) => dispatch => {
    if (quantity > 0) {
        fetch(`/api/carts/${cart}`, makeOpts('PUT', { product, quantity }))
            .then(res => res.json())
            .then(data => dispatch({
                type: 'LOADED_CART',
                payload: {
                    data,
                },
            }))
            .catch(() => dispatch({ tyoe: 'ERRORED' }))
    }
}

export {
    placeOrder,
    removeProduct,
    updateQuantity
}
