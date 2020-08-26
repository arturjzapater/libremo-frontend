import request from '../../lib/request'

const makeOpts = product => ({
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product }),
})

const addProduct = (cart, product) => dispatch => {
    request(`/api/carts/${cart}`, makeOpts(product))
        .then(data => dispatch({
            type: 'SET_CART',
            payload: {
                cart: data,
            },
        }))
        .catch(() => dispatch({ type: 'ERRORED' }))
}

export {
    addProduct
}
