import { useEffect, useState } from "react"
import classes from './postPage.module.css'
import { useNavigate, useParams } from "react-router-dom"
import { getAuthor, getPost } from '../../services/blogService'
import { Loader } from "../loader.component/loader.component"
import { LoremIpsum } from 'lorem-ipsum'
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export const PostPage = () => {
    const { postId } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        getPost(postId)
            .then(async (post) => {
                if (!post) {
                    navigate('/page-404')
                    return
                }
                const { userId, title, body } = post
                const author = await getAuthor(userId)
                const { name, email, company: { name: companyName } } = author
                setPost({
                    title, text: [body, lorem.generateParagraphs(5), lorem.generateParagraphs(5), lorem.generateParagraphs(5)],
                    author: { name, email, companyName }
                })
            })
    }, [])

    if (!post) {
        return <Loader isLoaded={false} />
    }

    return (
        <div className={classes.container}>
            <div className={classes.author}>
                <div className={classes.author_name}>{post.author.name}</div>
                <div className={classes.author_email}>{post.author.email}</div>
                <div className={classes.author_companyName}>Company Name: {post.author.companyName}</div>
            </div>
            <div className={classes.title}>Title: {post.title}</div>
            <div className={classes.text}>{post.text.map(row => <p>{row}</p>)}</div>
        </div>
    )
}
