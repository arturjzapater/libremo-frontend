const initState = {
    view: 'home',
    status: 'idle',
    data: {},
}

const actions = {
    LOADED_HOME: state => ({
        ...state,
        view: 'home',
        status: 'idle',
        data: {},
    }),
    LOADING_PRODUCTS: state => ({
        ...state,
        status: 'loading',
        data: {},
    }),
    LOADED_PRODUCTS: (state, { data }) => ({
        ...state,
        view: 'products',
        status: 'idle',
        data,
    }),
    default: state => ({
        ...state,
    }),
}

export default (state = initState, action) => {
    const handler = actions[action.type] || actions.default
    return handler(state, action.payload)
}
