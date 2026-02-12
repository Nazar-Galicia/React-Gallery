import {memo, useContext, useCallback, useState, useRef} from 'react';
import ModalPreviewContainer from "@/shared/ui/ModalPreviewContainer";
import { ImageContext } from '@/entities/gallery';
import Button from '@/shared/ui/Button';
import ArrowLeftIcon from '@/shared/assets/icons/arrow-left.png'
import ArrowRightIcon from '@/shared/assets/icons/arrow-right.png'
import CrossModalIcon from '@/shared/assets/icons/close-modal-cross.png'
import styles from './ModalPreviewPhoto.module.scss'

const PreviewPhoto = (props) => {

    const {
        images,
    } = useContext(ImageContext)

    const {
        modalVisibility,
        setModalVisibility,
        showImage,
        image,
        currentImageIndex,
    } = props

    let visibilityClass = modalVisibility ? styles.active : ''

    const modalImageRef = useRef(null)

    const switchPhoto = useCallback((direction, animStyle) => {
        if (direction === 'left') {
            currentImageIndex.current = (currentImageIndex.current - 1 + images.length) % images.length
        } else if (direction === 'right') {
            currentImageIndex.current = (currentImageIndex.current + 1) % images.length
        }

        animStyle.forEach((style) => {
            modalImageRef.current.classList.add(style)
        })

        setTimeout(() => showImage(images[currentImageIndex.current].id), 75)

        setTimeout(() => {
            animStyle.forEach((style) => {
                modalImageRef.current.classList.remove(style)
            })
        }, 200)

    }, [images, showImage, currentImageIndex])

    return (
        <div className={`${styles.modalPhoto} ${visibilityClass}`}>
            <Button className={styles.switchButton} onClickHandler={() => switchPhoto('left', [styles.imageChange, styles.left])}>
                <img 
                    className={styles.switchImg} 
                    src={ArrowLeftIcon}
                    alt="arrow" 
                />
            </Button>

            <ModalPreviewContainer
                image={image}
                modalImageRef={modalImageRef}
            />

            <Button className={styles.switchButton} onClickHandler={() => switchPhoto('right', [styles.imageChange, styles.right])}>

                <img 
                    className={styles.switchImg} 
                    src={ArrowRightIcon}
                    alt="arrow" 
                />
            </Button>

            <Button onClickHandler={() => setModalVisibility(false)} className={styles.exitButton}><img src={CrossModalIcon} alt="cross" /></Button>
        </div>
    )
}

export default memo(PreviewPhoto);