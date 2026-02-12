import {useCallback, useContext, useRef, useState} from "react"
import Button from "@/shared/ui/Button"
import ModalPreviewPhoto from "@/widgets/ModalPreviewPhoto"
import { SelectButtonsList } from "@/entities/gallery"
import GallerySearch from "@/widgets/GallerySearch";
import { ImageContext } from "@/entities/gallery"
import ArrowDownIcon from '@/shared/assets/icons/arrow-down.png'
import styles from './Gallery.module.css'

const Gallery = () => {

    const {
        loadMore,
        page,
        totalPages,
        images,
    } = useContext(ImageContext)

    const [modalVisibility, setModalVisibility] = useState(false)
    const currentImageIndex = useRef(0)

    const [image, setImage] = useState({})

    const showImage = useCallback((imageID) => {
        const filteredImg = images.find(({ id }) => id === imageID)
        // setImage({
        //     id: imageID,
        //     img: filteredImg.src.landscape,
        //     desc: filteredImg.alt,
        //     photographer: filteredImg.photographer,
        //     photographerURL: filteredImg.photographer_url
        // })
        const newImage = {
            id: imageID,
            img: filteredImg.src.landscape,
            desc: filteredImg.alt,
            photographer: filteredImg.photographer,
            photographerURL: filteredImg.photographer_url
        }
        setImage(newImage)
    }, [images])

    return (
        <div className={styles.gallery}>
            <GallerySearch />
            <ModalPreviewPhoto
                modalVisibility={modalVisibility}
                setModalVisibility={setModalVisibility}
                showImage={showImage}
                image={image}
                currentImageIndex={currentImageIndex}
            />
            <SelectButtonsList
                setModalVisibility={setModalVisibility}
                showImage={showImage}
                currentImageIndex={currentImageIndex}
            />
            {
                page < totalPages.current ? <Button onClickHandler={loadMore} className={styles.loadButton}>Load more <img className={styles.loadImg} src={ArrowDownIcon} alt="arrow down" /></Button> : <p className={styles.endOfPages}>No more results</p>
            }
            
        </div>
    )
}

export default Gallery