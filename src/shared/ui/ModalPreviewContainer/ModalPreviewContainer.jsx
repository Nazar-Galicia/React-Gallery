import ModalPreviewImage from "@/shared/ui/ModalPreviewImage"
import { ImageContext } from "@/entities/gallery"
import { useContext } from "react"
import Description from "@/shared/ui/Desccription"
import AuthorLink from '@/shared/ui/AuthorLink'
import Button from "@/shared/ui/Button"
import DownloadIcon from '@/shared/assets/icons/download-icon.png'
import styles from './ModalPreviewContainer.module.scss'

const ModalPreviewContainer = () => {
    const {
        image,
    } = useContext(ImageContext)

    const {
        id,
        img,
        desc,
        photographer,
        photographerURL,
    } = image

    const {
        donwloadImage,
    } = useContext(ImageContext)

    return (
        <div className={styles.photoContainer}>
            <div className={styles.wrapper}>
                <AuthorLink style={styles.authorLink} photographerURL={photographerURL}>{photographer}</AuthorLink>
                <Button
                onClickHandler={() => donwloadImage(id)}
                className={styles.downloadButton}
            >
                <img 
                    className={styles.downloadImg}
                    src={DownloadIcon}
                    alt="arrow down" 
                />
            </Button>
                <ModalPreviewImage src={img} />
                <Description className={styles.description}>{desc}</Description>
            </div>
        </div>
    )
}

export default ModalPreviewContainer