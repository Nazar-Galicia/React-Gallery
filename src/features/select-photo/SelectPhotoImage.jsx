import { memo, useContext } from "react"
import { ImageContext } from "@/entities/gallery"

const SelectPhotoImage = (props) => {
    const {
        src,
        alt,
        imageID,
        imageClass,
    } = props

    const {
        openModal,
    } = useContext(ImageContext)

    return (
        <img
            onClick={() => openModal(imageID)}
            loading="lazy" 
            className={imageClass} 
            src={src} 
            alt={alt} 
        />
    )
}

export default memo(SelectPhotoImage)