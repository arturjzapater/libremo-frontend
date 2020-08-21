const loadHome = () => ({ type: 'LOADED_HOME' })

const loadProducts = () => dispatch => {
    dispatch({ type: 'LOADING_PRODUCTS' })
    fetch('/api/products')
        .then(res => res.json())
        .then(data => dispatch({
            type: 'LOADED_PRODUCTS',
            payload: { data },
        }))
}

export {
    loadHome,
    loadProducts
}
