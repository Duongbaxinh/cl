import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    },

})
export const setAuthorization = (authorization) => {
    axiosInstance.defaults.headers.common['Authorization'] = authorization
}

export default axiosInstance