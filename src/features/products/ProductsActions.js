const makeOpts = product => ({
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product }),
})

const addProduct = (cart, product) => _dispatch => {
    console.log(cart, product)
    fetch(`/api/carts/${cart}`, makeOpts(product))
        .then(res => res.json())
        .then(console.log)
}

export {
    addProduct
}
