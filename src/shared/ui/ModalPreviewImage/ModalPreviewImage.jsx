import { ImageContext } from '@/entities/gallery'
import styles from './ModalPreviewImage.module.css'
import { memo, useContext } from 'react'

const ModalPreviewImage = (props) => {
    const { src } = props

    const {
        modalImageRef,
    } = useContext(ImageContext)

    return (
        <img 
            className={styles.previewImage} 
            src={src} 
            alt="modal preview photo"
            ref={modalImageRef} 
        />
    )
}

export default memo(ModalPreviewImage)