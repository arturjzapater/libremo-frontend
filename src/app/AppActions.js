const getNewCart = dispatch =>
    fetch('/api/carts', { method: 'POST' })
        .then(res => res.json())
        .then(({ id }) => {
            localStorage.setItem('cart', id)
            dispatch({
                type: 'SET_CART',
                payload: {
                    cart: id,
                },
            })
        })

const getCart = () => dispatch => {
    const cart = localStorage.getItem('cart')
    if (!cart) return getNewCart(dispatch)

    fetch(`/api/carts/${cart}/itemcount`)
        .then(res => {
            if (!res.ok) Promise.reject()
            else return res.json()
        })
        .then(({ count }) => dispatch({
            type: 'SET_CART',
            payload: {
                cart,
                count,
            },
        }))
        .catch(() => getNewCart(dispatch))
}

export {
    getCart
}
