import React from "react"
import { MessageContext } from "../../App"
import Title from "../../components/Title/Title"
import { useNavigate } from "react-router-dom"
import { createCategory } from "../../api/categoryApi"

const CreateCategory: React.FC = () => {
    const [name, setName] = React.useState("")
    const navigate = useNavigate()
    const messageContext = React.useContext(MessageContext)

    const handleClickBtn = () => {
        if (name.length == 0) {
            messageContext?.createMessage("Enter the name of the category")
            return
        }

        createCategory({ name }).then((response) => {
            if (response) {
                messageContext?.createMessage("Category successfully created")
                navigate("/categories")
            } else {
                messageContext?.createMessage("An error occurs")
                setName("")
            }
        })
    }

    return (
        <div>
            <Title text='Creating a category' />
            <table className='creating-table'>
                <tbody>
                    <tr>
                        <td>Category name:</td>
                        <td>
                            <input
                                type='text'
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                value={name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button
                                className='mt-[20px]'
                                onClick={handleClickBtn}
                            >
                                Create
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CreateCategory
