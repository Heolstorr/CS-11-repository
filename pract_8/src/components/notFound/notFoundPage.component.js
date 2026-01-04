import { useNavigate } from 'react-router-dom'
import classes from './notFoundPage.module.css'
import { AuthorizedWrapper } from '../wrapper/wrapper.component'

export const NotFoundPageComponent = () => {
    const navigate = useNavigate()
    const toHomeHandler = () => {
        navigate('/')
    }

    return (
        <div className={classes.container}>
            404 not found page
            <div
                onClick={toHomeHandler}
                className={classes.button}>to home</div>
        </div>
    )
}