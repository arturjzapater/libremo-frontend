const getNewCart = dispatch =>
    fetch('/api/carts', { method: 'POST' })
        .then(res => res.json())
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

    fetch(`/api/carts/${cart}`)
        .then(res => {
            if (!res.ok) Promise.reject()
            else return res.json()
        })
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
