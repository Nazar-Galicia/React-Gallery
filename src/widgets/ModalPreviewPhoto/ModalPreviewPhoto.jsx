import { memo, useContext } from 'react';
import ModalPreviewContainer from "@/shared/ui/ModalPreviewContainer";
import { ImageContext } from '@/entities/gallery';
import Button from '@/shared/ui/Button';
import ArrowLeftIcon from '@/shared/assets/icons/arrow-left.png'
import ArrowRightIcon from '@/shared/assets/icons/arrow-right.png'
import CrossModalIcon from '@/shared/assets/icons/close-modal-cross.png'
import styles from './ModalPreviewPhoto.module.scss'

const PreviewPhoto = () => {

    const {
        modalVisibility,
    } = useContext(ImageContext)

    let visibilityClass = modalVisibility ? styles.active : ''

    const {
        closeModal,
        switchPhoto
    } = useContext(ImageContext)

    return (
        <div className={`${styles.modalPhoto} ${visibilityClass}`}>
            <Button className={styles.switchButton} onClickHandler={() => switchPhoto('left', [styles.imageChange, styles.left])}>
                <img 
                    className={styles.switchImg} 
                    src={ArrowLeftIcon}
                    alt="arrow" 
                />
            </Button>

            <ModalPreviewContainer />

            <Button className={styles.switchButton} onClickHandler={() => switchPhoto('right', [styles.imageChange, styles.right])}>

                <img 
                    className={styles.switchImg} 
                    src={ArrowRightIcon}
                    alt="arrow" 
                />
            </Button>

            <Button onClickHandler={closeModal} className={styles.exitButton}><img src={CrossModalIcon} alt="cross" /></Button>
        </div>
    )
}

export default memo(PreviewPhoto);