import { memo, useContext } from "react"
import SelectPhotoImage from "@/features/select-photo"
import AuthorLink from "@/shared/ui/AuthorLink"
import styles from './SelectPhotoButton.module.scss'
import Description from "@/shared/ui/Desccription"
import { ImageContext } from "@/entities/gallery"
import DownloadIcon from '@/shared/assets/icons/download-icon.png'
import Button from "@/shared/ui/Button"

const SelectPhotoButton = (props) => {

    const {
        imageID,
        imagePath,
        imageAlt,
        photographer,
        photographerURL,
    } = props

    const {
        donwloadImage,
    } = useContext(ImageContext)

    return (
        <div 
            id={imageID} 
            className={styles.button}
        >
            <AuthorLink
                photographerURL={photographerURL}
                style={styles.buttonLink}
            >
                {photographer}
            </AuthorLink>

            <Description 
                className={styles.buttonDescription}
            >{imageAlt}</Description>

            <Button
                onClickHandler={() => donwloadImage(imageID)}
                className={styles.downloadButton}
            >
                <img 
                    className={styles.downloadImg}
                    src={DownloadIcon}
                    alt="arrow down" 
                />
            </Button>

            <SelectPhotoImage 
                alt={imageAlt} 
                src={imagePath} 
                imageID={imageID}
                imageClass={styles.buttonImg}
            />
        </div>
    )
}

export default memo(SelectPhotoButton)