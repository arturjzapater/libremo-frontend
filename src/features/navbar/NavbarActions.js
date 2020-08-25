const loadCart = cart => dispatch => {
    dispatch({ type: 'LOADING' })
    fetch(`/api/carts/${cart}`)
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_CART',
            payload: { data },
        }))
        .catch(console.log)
}

const loadHome = () => ({ type: 'LOADED_HOME' })

const loadProducts = () => dispatch => {
    dispatch({ type: 'LOADING' })
    fetch('/api/products')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_PRODUCTS',
            payload: { data },
        }))
        .catch(console.log)
}

export {
    loadCart,
    loadHome,
    loadProducts
}
