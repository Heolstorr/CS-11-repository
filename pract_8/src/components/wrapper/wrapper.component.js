import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import './wrapper.css'
import { Header } from "../header.component/header.component"
import { Footer } from "../footer.component/footer.component"

export const AuthorizedWrapper = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')
        }
    },
        [] // Execute only one time when component is rendered first time
    )
    return (
        <div className="wrapper"><Outlet /></div>
    )
}

export const NonAuthorizedWrapper = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    },
        [] // Execute only one time when component is rendered first time
    )
    return (
        <>
            <Header />
            <div className="min-height">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}