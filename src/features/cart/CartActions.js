import request from '../../lib/request'

const makeOpts = (method, body) => ({
    method,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
})

const placeOrder = details => dispatch => {
    request('/api/orders', makeOpts('POST', details))
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
    request(`/api/carts/${cart}/?action=delete`, makeOpts('PUT', { product }))
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
        request(`/api/carts/${cart}`, makeOpts('PUT', { product, quantity }))
            .then(data => dispatch({
                type: 'LOADED_CART',
                payload: {
                    data,
                },
            }))
            .catch(() => dispatch({ type: 'ERRORED' }))
    }
}

export {
    placeOrder,
    removeProduct,
    updateQuantity
}
