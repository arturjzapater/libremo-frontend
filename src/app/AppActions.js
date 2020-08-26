import request from '../lib/request'

const getNewCart = dispatch =>
    request('/api/carts', { method: 'POST' })
        .then(data => {
            localStorage.setItem('cart', data.id)
            dispatch({
                type: 'SET_CART',
                payload: {
                    cart: data,
                },
            })
        })
        .catch(() => dispatch({ type: 'ERRORED' }))

const getCart = () => dispatch => {
    const cart = localStorage.getItem('cart')
    if (!cart) return getNewCart(dispatch)

    request(`/api/carts/${cart}`)
        .then(data => dispatch({
            type: 'SET_CART',
            payload: {
                cart: data,
            },
        }))
        .catch(() => getNewCart(dispatch))
}

export {
    getCart
}
