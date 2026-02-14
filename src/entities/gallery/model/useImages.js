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
    const totalPages = useRef(0)
    const totalResults = useRef(0)
    const perPage = 80

    const [images, setImages] = useState([])

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

    const queryInfo = useRef(category)  

    const changeCategory = useCallback((category) => {
        queryInfo.current = category
        setCategory(category)
    }, [])

    useEffect(() => {
        setImages([])
        setPage(1)
        console.log(images)
    }, [category]);

    useEffect(() => {
        imageAPI.getImages(category, page, perPage)
        .then((serverImages) => {
            setImages(prevState => [...prevState, ...serverImages.photos.filter(img => !prevState.some(p => p.id === img.id))])
            totalResults.current = serverImages.total_results
            totalPages.current = Math.ceil(totalResults.current / perPage)
        })
        console.log(images)
    }, [page, category]);

    return {
        images,
        categories,
        setCategory,
        setPage,
        totalPages,
        page,
        totalResults,
        queryInfo,
        donwloadImage,
        loadMore,
        changeCategory,
    }
}