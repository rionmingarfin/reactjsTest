const initialState = {
    productList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productList: action.payload.data
            };
        case 'GET_PRODUCTID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_PRODUCTID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_PRODUCTID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productList: action.payload.data
            };
        default:
            return state;
    }
};

export default product;