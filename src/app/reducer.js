const initState = {
    view: 'home',
    status: 'idle',
    cart: null,
    data: {},
}

const actions = {
    GET_CART: (state, { cart }) => ({
        ...state,
        cart,
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
        data,
    }),
    LOADING_PRODUCTS: state => ({
        ...state,
        status: 'loading',
        data: {},
    }),
    default: state => ({
        ...state,
    }),
}

export default (state = initState, action) => {
    const handler = actions[action.type] || actions.default
    return handler(state, action.payload)
}
