import { useContext, memo } from "react"
import SelectPhotoButton from "@/entities/gallery/ui/SelectPhotoButton"
import { ImageContext } from "@/entities/gallery"

import styles from './SelectButtonsList.module.css'

const SelectButtonsList = (props) => {

    const {
        setModalVisibility,
        showImage,
        currentImageIndex,
    } = props

    const {
        images,
    } = useContext(ImageContext)

    return (
        <div className={styles.buttonsList}>
            <ul>
               {images.map((photo) => (
                <SelectPhotoButton 
                    key={photo.id} 
                    imageID={photo.id} 
                    imagePath={photo.src.portrait}
                    imageAlt={photo.alt}
                    photographer={photo.photographer}
                    photographerURL={photo.photographer_url}
                    setModalVisibility={setModalVisibility}
                    showImage={showImage}
                    currentImageIndex={currentImageIndex}
                />
               ))} 
            </ul>
        </div>
    )
}

export default memo(SelectButtonsList)