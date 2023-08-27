import React, { useEffect, useState } from 'react';
import instanceUserApi from '../../api/instantUserApi';

export const Action = {
    LOGIN: 'login',
    SIGN_UP: 'signup'
}
const handleAction = {
    login: async (dataUser) => {
        return await instanceUserApi.login(...dataUser)
    }
}
const useAuthorization = (action, dataUser) => {
    const [dataResult, setDataResult] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = () => {
        setIsLoading(true)
        const { data } = handleAction[action](dataUser)
        setDataResult(data)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { dataResult, isLoading }
}

export default useAuthorization;