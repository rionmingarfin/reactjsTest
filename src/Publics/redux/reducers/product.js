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
        case 'POST_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false
            };
        case 'POST_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            };
        case 'POST_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                productList: [state.productList, action.payload.data.data]
            };
        case 'EDIT_PRODUCT_PENDING':
                return {
                    ...state,
                    isLoading: true,
                    isFulfilled: false,
                    isRejected: false
                };
        case 'EDIT_PRODUCT_REJECTED':
                return {
                    ...state,
                    isLoading: false,
                    isRejected: true
                };
        case 'EDIT_PRODUCT_FULFILLED':
                return {
                    ...state,
                    isLoading: false,
                    isFulfilled: true,
                    productList: [state.productList, action.payload.data.data]
                };
        case 'DELETE_PRODUCT_PENDING':
                    return {
                        ...state,
                        isLoading: true,
                        isFulfilled: false,
                        isRejected: false
                    };
        case 'DELETE_PRODUCT_REJECTED':
                    return {
                        ...state,
                        isLoading: false,
                        isRejected: true
                    };
        case 'DELETE_PRODUCT_FULFILLED':
                    return {
                        ...state,
                        isLoading: false,
                        isFulfilled: true,
                        productList: [state.productList, action.payload.data.result]
                    };
        default:
            return state;
    }
};

export default product;