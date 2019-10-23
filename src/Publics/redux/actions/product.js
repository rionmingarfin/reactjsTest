import axios from 'axios';

let url = `http://localhost:4000`



export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`${url}/api/v3/product`)
    }
}

export const getProductid = (idProduct) => {
    return {
        type: 'GET_PRODUCTID', idProduct,
        payload: axios.get(`${url}/api/v3/product/${idProduct}`)
    }
}

export const postProduct = (data) => {
    console.log(data.description)
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`${url}/api/v3/product`, data, {
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        })
    }
}

export const editProduct = (data, idProduct) => {
    console.log(data.description)
    return {
        type: 'EDIT_PRODUCT',
        payload: axios.patch(`${url}/api/v3/product/${idProduct}`, data, {
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        }),
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`${url}/api/v3/product/${id}`, {
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        }),
    };
}