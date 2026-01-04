import classes from './loader.module.css'

export const Loader = (props) => {
    const { isLoaded } = props
    if (isLoaded) {
        return <></>
    }

    return (<div className={classes.container}>
        <span className={classes.loader}></span>
    </div>)
}