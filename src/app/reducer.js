const initState = {
    view: 'home',
    status: 'idle',
    cart: {},
    count: 0,
    order: {},
    products: {},
}

const actions = {
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
        products: data,
    }),
    LOADING: state => ({
        ...state,
        status: 'loading',
    }),
    SET_CART: (state, { cart }) => ({
        ...state,
        cart,
        count: cart.count,
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
