const AuthorLink = (props) => {
    const {
        children,
        photographerURL,
        style,
    } = props

    return (
        <a 
            className={style}
            href={photographerURL} 
            target="_blank" 
            title='Author link'
        >
            {children}
        </a>
    )
}

export default AuthorLink