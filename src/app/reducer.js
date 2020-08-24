const initState = {
    view: 'home',
    status: 'idle',
    cart: null,
    count: 0,
    data: {},
}

const actions = {
    LOADED_CART: (state, { data }) => ({
        ...state,
        view: 'cart',
        status: 'idle',
        data,
    }),
    LOADED_HOME: state => ({
        ...state,
        view: 'home',
        status: 'idle',
        data: {},
    }),
    LOADED_PRODUCTS: (state, { data }) => ({
        ...state,
        view: 'products',
        status: 'idle',
        data: {
            products: data,
        },
    }),
    LOADING: state => ({
        ...state,
        status: 'loading',
    }),
    SET_CART: (state, { cart, count = 0 }) => ({
        ...state,
        cart,
        count,
    }),
    UPDATE_COUNT: (state, { count }) => ({
        ...state,
        count,
    }),
    default: state => ({
        ...state,
    }),
}

export default (state = initState, action) => {
    const handler = actions[action.type] || actions.default
    return handler(state, action.payload)
}
