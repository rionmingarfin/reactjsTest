import axios from 'axios';

let url = `http://localhost:4000`

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/api/v3/register`, data)
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
    
            localStorage.setItem('id', id)
            localStorage.setItem('jwToken', token)
            localStorage.setItem('username', username)

        })
    }
}
