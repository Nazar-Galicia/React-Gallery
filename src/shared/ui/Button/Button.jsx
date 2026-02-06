import { memo } from "react"

const Button = (props) => {
    const {
        children,
        onClickHandler,
        className='',
    } = props

    return (
        <button className={className} onClick={onClickHandler}>{children}</button>
    )
}

export default memo(Button)