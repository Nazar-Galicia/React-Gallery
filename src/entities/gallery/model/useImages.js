import {useCallback, useState, useRef, useEffect} from "react"
import { useCreateCategoriesArray } from "./useCreateCategoriesArray.js"
import imageAPI from "@/shared/api/images/imageAPI.js"

export function useImages() {

    const [page, setPage] = useState(1)

    const categoriesNames = [
        'backgrounds',
        'fashion',
        'science',
        'sports',
        'cars'
    ]
    
    const {
        categories,
    } = useCreateCategoriesArray(categoriesNames)

    const firstCategory = categories[0]
    const [category, setCategory] = useState(firstCategory.category)

    const [images, setImages] = useState([])
    const totalPages = useRef(0)
    const totalResults = useRef(0)
    const perPage = 80

    const [image, setImage] = useState({})

    const showImage = useCallback((imageID) => {
        const filteredImg = images.find(({ id }) => id === imageID)
        setImage({
            id: imageID,
            img: filteredImg.src.landscape,
            desc: filteredImg.alt,
            photographer: filteredImg.photographer,
            photographerURL: filteredImg.photographer_url
        })
    }, [images])

    const donwloadImage = useCallback((imageId) => {
        const imageSrc = images.find(({ id }) => id === imageId).src.original

        imageAPI.downloadImage(imageSrc)
            .then((image) => {
                const imageURL = URL.createObjectURL(image)

                const link = document.createElement('a')
                link.href = imageURL
                link.download = `image-${imageId}.jpeg`

                link.click()

                URL.revokeObjectURL(imageURL)
            }) 
            .catch((error) => alert(error.message))
    }, [images])

    const loadMore = useCallback(() => {
        setPage(() => {
            if (page < totalPages.current) {
                return page + 1
            }   
        })
    }, [totalPages, page])

    const [modalVisibility, setModalVisibility] = useState(false)
    const currentImageIndex = useRef(0)

    const openModal = useCallback((id) => {
        showImage(id)
        currentImageIndex.current = images.findIndex((photos) => photos.id === id)

        setModalVisibility(true)
    }, [images, showImage])

    const closeModal = useCallback(() => {
        setModalVisibility(false)
    }, [])

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

    }, [images, showImage])

    const queryInfo = useRef(category)  

    const changeCategory = useCallback((category) => {
        queryInfo.current = category
        setCategory(category)
    }, [])

    useEffect(() => {
        setImages([])
        setPage(1)
    }, [category]);

    useEffect(() => {
        imageAPI.getImages(category, page, perPage)
        .then((serverImages) => {
            setImages(prevState => [...prevState, ...serverImages.photos.filter(img => !prevState.some(p => p.id === img.id))])
            totalResults.current = serverImages.total_results
            totalPages.current = Math.ceil(totalResults.current / perPage)
        })
    }, [page, category]);

    return {
        image,
        images,
        categories,
        setCategory,
        setPage,
        totalPages,
        page,
        totalResults,
        queryInfo,
        showImage,
        donwloadImage,
        loadMore,
        modalVisibility,
        openModal,
        closeModal,
        currentImageIndex,
        switchPhoto,
        modalImageRef,
        changeCategory,
    }
}