import {createContext, useMemo} from "react";
import { useImages } from "./useImages.js";

export const ImageContext = createContext({})

export const ImageProvider = (props) => {
    const { children } = props

    const {
        image,
        images,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
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
    } = useImages();

    const value = useMemo(() => ({
        images,
        showImage,
        image,
        modalVisibility,
        switchPhoto,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
        totalResults,
        queryInfo,
        modalImageRef,
        donwloadImage,
        loadMore,
        openModal,
        closeModal,
        currentImageIndex,
        changeCategory,
    }), [
        images,
        showImage,
        image,
        modalVisibility,
        switchPhoto,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
        totalResults,
        queryInfo,
        modalImageRef,
        donwloadImage,
        loadMore,
        openModal,
        closeModal,
        currentImageIndex,
        changeCategory,
    ])

    return (
        <ImageContext.Provider
            value={value}
        >
            {children}
        </ImageContext.Provider>
    )
}