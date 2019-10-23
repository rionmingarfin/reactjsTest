import axios from 'axios';

let url = `http://localhost:4000`

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/api/v3/register`, data)
    }
}
export const getUser = () => {
    return {
        type : "GET_USER",
        payload : axios.get(`${url}/api/v3/user`,{
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        })
    }
}

export const getUsertid = (id) => {
    return {
        type: 'GET_USERID', id,
        payload: axios.get(`${url}/api/v3/user/${id}`,{
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        })
    }
}
export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/api/v3/login`, data).then(res => {
            // console.log("respoon",res.data.token)
            // console.log("respoon",res.data.data[0].id)
            const token = res.data.token
            const id = res.data.data[0].id
            const username = res.data.data[0].username
            const status = res.data.data[0].status
    
            localStorage.setItem('id', id)
            localStorage.setItem('jwToken', token)
            localStorage.setItem('username', username)
            localStorage.setItem('status', status)

        })
    }
}
export const EditUserId = (data, id) => {
    console.log(data)
    return {
        type: 'EDIT_USER',
        payload: axios.patch(`${url}/api/v3/user/${id}`, data, {
            headers: {
                "x-auth-token": localStorage.jwToken,
            }
        }),
    }
}