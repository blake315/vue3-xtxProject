import axios from "axios";

const httpInstance =  axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

httpInstance.interceptors.request.use(config => {
    return config
} , e => Promise.reject(e))

httpInstance.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance