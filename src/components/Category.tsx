import React from "react"
import { ICategory } from "../types/Category"

interface CategoryProps extends ICategory {
    handleDeleteCategory: (id: number) => void
}

const Category: React.FC<CategoryProps> = ({
    id,
    name,
    handleDeleteCategory,
}) => {
    return (
        <tr>
            <td className='text-center'>{id}</td>
            <td>{name}</td>
            <td
                className='cursor-pointer'
                title='Delete category'
                onClick={() => handleDeleteCategory(id)}
            >
                X
            </td>
        </tr>
    )
}

export default Category
