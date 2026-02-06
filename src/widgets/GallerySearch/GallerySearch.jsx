import CategoriesButtonsList from "@/entities/gallery/ui/CategoriesButtonsList";
import SearchQueryForm from "@/features/search-image";

const GallerySearch = () => {
    return (
        <div className='gallery-search'>
            <CategoriesButtonsList />
            <SearchQueryForm />
        </div>
    )
}

export default GallerySearch