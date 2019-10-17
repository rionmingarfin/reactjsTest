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

export const postPRODUCT = (data) => {
    console.log(data.description)
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`${url}/PRODUCT`, data, {
            headers: {
                "authorization": "x-control-app",
            }
        })
    }
}

export const editPRODUCT = (data, idPRODUCT) => {
    console.log(data.description)
    return {
        type: 'EDIT_PRODUCT',
        payload: axios.patch(`${url}/PRODUCT/${idPRODUCT}`, data, {
            headers: {
                "authorization": "x-control-app",
            }
        }),
    }
}

export const deletePRODUCT = (idPRODUCT) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete(`${url}/${idPRODUCT}`, {
            headers: {
                "authorization": "x-control-app",
            }
        }),
    };
}