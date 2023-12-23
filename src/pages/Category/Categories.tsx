import React from "react"
import Title from "../../components/Title/Title"
import "./categories.scss"
import { MessageContext } from "../../App"
import { NavLink } from "react-router-dom"
import { ICategory } from "../../types/Category"
import { deleteCategory, fetchCategories } from "../../api/categoryApi"
import Category from "../../components/Category"

const Categories = () => {
    const [categories, setCategories] = React.useState<ICategory[]>([])

    const messageContext = React.useContext(MessageContext)

    React.useEffect(() => {
        fetchCategories().then((response) => {
            setCategories(response)
        })
    }, [])

    const handleDeleteCategory = (id: number) => {
        deleteCategory(id).then((response) => {
            if (response) {
                messageContext?.createMessage("Category successfully deleted")
                setCategories((prev) => prev.filter((item) => item.id != id))
            } else messageContext?.createMessage("An error occurs")
        })
    }

    return (
        <div>
            <Title text='Category' />
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((c) => (
                        <Category
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            handleDeleteCategory={handleDeleteCategory}
                        />
                    ))}
                </tbody>
            </table>
            <NavLink className='mt-[20px] inline-block' to='/createCategory'>
                Create category
            </NavLink>
        </div>
    )
}

export default Categories
