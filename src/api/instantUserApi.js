import axiosInstance from "./configDefaultAxios";

const instanceUserApi = {
    login: async (dataUser) => {
        const { data } = await axiosInstance.post('/auth/login', { ...dataUser })
        return data
    },
    register: async (dataUser) => {
        const { data } = await axiosInstance.post('/auth/register', { ...dataUser })
        return data
    },
    querySearch: async (dataSearch) => {

        const { data } = await axiosInstance.get(`/users/search?search=${dataSearch}`)
        return data
    }
}
export default instanceUserApi