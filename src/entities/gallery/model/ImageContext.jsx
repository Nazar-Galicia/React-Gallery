import {createContext, useMemo} from "react";
import { useImages } from "./useImages.js";

export const ImageContext = createContext({})

export const ImageProvider = (props) => {
    const { children } = props

    const {
        images,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
        totalResults,
        queryInfo,
        donwloadImage,
        loadMore,
        changeCategory,
    } = useImages();

    const value = useMemo(() => ({
        images,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
        totalResults,
        queryInfo,
        donwloadImage,
        loadMore,
        changeCategory,
    }), [
        images,
        categories,
        setCategory,
        setPage,
        page,
        totalPages,
        totalResults,
        queryInfo,
        donwloadImage,
        loadMore,
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