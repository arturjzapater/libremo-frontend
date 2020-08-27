const initState = {
    view: 'home',
    status: 'idle',
    cart: {},
    count: 0,
    order: {},
    products: {},
}

const actions = {
    ERRORED: state => ({
        ...state,
        view: 'error',
    }),
    LOADED_CART: (state, { data }) => ({
        ...state,
        view: 'cart',
        status: 'idle',
        count: data.count,
        cart: data,
    }),
    LOADED_HOME: state => ({
        ...state,
        view: 'home',
        status: 'idle',
    }),
    LOADED_ORDER: (state, { data }) => ({
        ...state,
        cart: {},
        count: 0,
        view: 'order',
        status: 'idle',
        order: data,
    }),
    LOADED_PRODUCTS: (state, { data }) => ({
        ...state,
        view: 'products',
        status: 'idle',
        products: {
            data: data.data,
            page: data.current_page,
            last: data.last_page,
        },
    }),
    LOADING: state => ({
        ...state,
        status: 'loading',
    }),
    SET_CART: (state, { cart }) => ({
        ...state,
        cart,
        count: cart.count || 0,
    }),
    default: state => ({
        ...state,
    }),
}

export default (state = initState, action) => {
    const handler = actions[action.type] || actions.default
    return handler(state, action.payload)
}
