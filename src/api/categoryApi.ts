import { ICategory, ICreateCategory } from './../types/Category';
import { url, routes } from "./apiConfig"

export const fetchCategories = async () => {
    const response = await fetch(`${url}${routes.category.fetch}`)
    const categories: ICategory[] = await response.json()
    return categories
}

export const deleteCategory = async (id: number) => {
    const response = await fetch(`${url}${routes.category.delete}/${id}`, {
        method: "DELETE",
    })
    if (response.status == 204) {
        return true
    } else {
        return false
    }
}

export const createCategory = async (category: ICreateCategory) => {
    const response = await fetch(`${url}${routes.category.create}`, {
        method: "POST",
        body: JSON.stringify(category),
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (response.status == 200) {
        return true
    } else {
        return false
    }
}
