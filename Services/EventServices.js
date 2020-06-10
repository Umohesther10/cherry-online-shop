import axios from 'axios'

const clientApi = axios.create({
    baseURL: '//localhost:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
        fetchSearchProduct (value) {
        clientApi.get(`/product/${value}`)
    }
}