import {memo, useCallback, useContext} from "react"
import {ImageContext} from "@/entities/gallery/index.js";

const SelectPhotoImage = (props) => {
    const {
        src,
        alt,
        imageID,
        imageClass,
        setModalVisibility,
        showImage,
        currentImageIndex,
    } = props

    const {
        images,
    } = useContext(ImageContext)

    const openModal = useCallback((id) => {
        showImage(id)
        currentImageIndex.current = images.findIndex((photos) => photos.id === id)
        setModalVisibility(true)
    }, [setModalVisibility, showImage, currentImageIndex, images])

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