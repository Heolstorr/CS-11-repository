import { Link } from 'react-router-dom'
import classes from './header.module.css'

export const Header = () => {

    return (
        <header className={classes.header}>
            <div>Amazing web-site with random posts</div>
            <div className={classes.menu}>
                <Link to="/">Home</Link> |
                <Link to="/posts">Posts</Link> | 
                <Link to="/authors">Authors</Link> 
            </div>
        </header>
    )
}