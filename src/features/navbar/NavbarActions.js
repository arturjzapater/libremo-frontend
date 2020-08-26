import request from '../../lib/request'

const loadCart = cart => dispatch => {
    dispatch({ type: 'LOADING' })
    request(`/api/carts/${cart}`)
        .then(data => dispatch({
            type: 'LOADED_CART',
            payload: { data },
        }))
        .catch(() => dispatch({ type: 'ERRORED' }))
}

const loadHome = () => ({ type: 'LOADED_HOME' })

const loadProducts = () => dispatch => {
    dispatch({ type: 'LOADING' })
    request('/api/products')
        .then(data => dispatch({
            type: 'LOADED_PRODUCTS',
            payload: { data },
        }))
        .catch(() => dispatch({ type: 'ERRORED' }))
}

export {
    loadCart,
    loadHome,
    loadProducts
}
