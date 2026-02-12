import styles from './ModalPreviewImage.module.css'
import { memo } from 'react'

const ModalPreviewImage = (props) => {
    const { src, modalImageRef } = props

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