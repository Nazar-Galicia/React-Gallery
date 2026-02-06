import { useContext, useState } from 'react'
import { ImageContext } from '@/entities/gallery'
import styles from './SearchQueryForm.module.scss'

const SearchQueryForm = () => {

    const [queryValue, setQueryValue] = useState('')

    const {
        setCategory,
        totalResults,
        queryInfo
    } = useContext(ImageContext)

    return (
        <form 
            className={styles.queryForm} 
            onSubmit={(event) => {
            event.preventDefault()

            if(queryValue.trim()) {
                setCategory(queryValue.trim())
                queryInfo.current = queryValue
                setQueryValue('')
            }
        }}>
            <div className={styles.fieldsContainer}>
                <input 
                    value={queryValue} 
                    onChange={(event) => setQueryValue(event.target.value)} 
                    className={styles.queryInput} 
                    type="text" 
                    name="query" 
                    placeholder="Enter category..."
                />

                <button 
                    className={styles.queryButton} 
                    type="submit"
                >
                    Search
                </button>
            </div>
            <p className={styles.totalInfo}>{`Total results (${totalResults.current}) by request "${queryInfo.current}"`}</p>
        </form>
    )
}

export default SearchQueryForm