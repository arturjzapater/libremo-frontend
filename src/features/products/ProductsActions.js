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
        .then(data => dispatch({
            type: 'SET_CART',
            payload: {
                cart: data,
            },
        }))
        .catch(console.log)
}

export {
    addProduct
}
