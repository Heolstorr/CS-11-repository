import { useEffect, useState } from "react"
import classes from './allPosts.module.css'
import { useNavigate } from "react-router-dom"
import { Header } from "../header.component/header.component"
import { Loader } from "../loader.component/loader.component"
import { Post } from "../post.component/post.component"
import { getPosts } from "../../services/blogService"

export const AllPostsComponent = () => {
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(false)
    const [post, setPosts] = useState([])
    useEffect(() => {
        setIsLoaded(false)
        // fetch('https://jsonplaceholder.typicode.com/posts')
        getPosts()
            .then(async (data) => {
                console.log(data)
                setPosts(data)
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded == false) {
        return <><Loader /></>
    }

    return (
        <>
            <div className={classes.main}>main component</div>
            <div className={classes.posts}>
                {
                    post.map(post => {
                        return <Post key={`post-${post.id}`} {...post} />
                    })
                }
            </div>

        </>
    )
}