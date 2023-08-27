import { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import dataUser from '../public/json/dataUser.json'
import dataPost from '../public/json/listPost.json'
const ModelContex = createContext()
export const ProvideContext = ({ children }) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([...dataPost])
    const [user, setUser] = useState()
    const [searchResult, setSearchResult] = useState(
        [...dataUser]
    )
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo) {
            setUser(userInfo)
        } else {
            navigate('/')
        }
    }, [])

    return (
        <ModelContex.Provider value={{ user, searchResult, showMenu, setShowMenu, posts }}>{children}</ModelContex.Provider>
    )
}
export const ContextState = () => {
    return useContext(ModelContex)
}