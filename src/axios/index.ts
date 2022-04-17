import axios from 'axios'

const server = axios.create({
    baseURL: 'http://124.223.193.250:3000',
    timeout: 5000
})

// Add a request interceptor
server.interceptors.request.use(function (config) {
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
server.interceptors.response.use(function (response) {
    if (response.status === 200){
        return response.data
    }
}, function (error) {
    return Promise.reject(error)
})
export default server