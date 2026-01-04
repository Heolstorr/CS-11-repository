import { useCallback, useEffect, useState } from "react"
import classes from './post.module.css'
import { useNavigate } from "react-router-dom"
import { getAuthor } from '../../services/blogService'
import { Loader } from "../loader.component/loader.component"

export const Post = (props) => {
    const { userId, id, title, body } = props
    const navigate = useNavigate()
    
    const text = body.slice(0, 45).trim()
    const titleCut = title.slice(0, 15).trim()
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        getAuthor(userId)
            .then(async (author) => {
                const { name, email, company: { name: companyName } } = author
                await new Promise(res => setTimeout(res, 2500))
                setAuthor({
                    name, email, companyName
                })
            })
    }, [])

    if (!author) {
        return <Loader isLoaded={false} />
    }

    return (
        <div className={classes.container} onClick={() => navigate(`/posts/${id}`)}>
            <div className={classes.title}>Title: {titleCut}...</div>
            <div className={classes.text}>{text}...</div>
            <div className={classes.author}>
                <div className={classes.author_name}>{author.name}</div>
                <div className={classes.author_email}>{author.email}</div>
                <div className={classes.author_companyName}>Company Name: {author.companyName}</div>
            </div>
        </div>
    )
}
