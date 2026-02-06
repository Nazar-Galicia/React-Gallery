import { useMemo } from "react";
import { v4 as uuidv4 } from 'uuid'

export function useCreateCategoriesArray(categoriesList) {
    const categories = useMemo(() => {
        return categoriesList.map(category => ({
            id: uuidv4(),
            category,
        }));

    }, [categoriesList])

    return {
        categories
    }
}