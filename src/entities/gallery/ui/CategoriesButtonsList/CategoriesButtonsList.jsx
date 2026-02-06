import { useContext, memo } from "react"
import { ImageContext } from "@/entities/gallery/model/ImageContext.jsx"
import styles from './СategoriesButtonList.module.scss'
import Button from "@/shared/ui/Button"

const CategoriesButtonsList = () => {
    const {
        categories,
        changeCategory,
    } = useContext(ImageContext)

    return (
        <div className={styles.categoriesContainer}>
            {
                categories.map(({ id, category }) => (
                    <Button 
                        key={id} 
                        className={`${styles.categoryButton}`} 
                        onClickHandler={() => changeCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                ))
            }
        </div>
    )
}

export default memo(CategoriesButtonsList)