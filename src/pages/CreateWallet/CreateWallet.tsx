import React from "react"
import { MessageContext } from "../../App"
import Title from "../../components/Title/Title"
import { createWallet } from "../../api/walletApi"
import { useNavigate } from "react-router-dom"

const CreateWallet: React.FC = () => {
    const [name, setName] = React.useState("")
    const navigate = useNavigate()
    const messageContext = React.useContext(MessageContext)

    const handleClickBtn = () => {
        if (name.length == 0) {
            messageContext?.createMessage("Enter the name of the wallet")
            return
        }

        createWallet({ name }).then((response) => {
            if (response) {
                messageContext?.createMessage("Wallet successfully created")
                navigate("/")
            } else {
                messageContext?.createMessage("An error occurs")
                setName("")
            }
        })
    }

    return (
        <div>
            <Title text='Creating a wallet' />
            <table className='creating-table'>
                <tbody>
                    <tr>
                        <td>Wallet name:</td>
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

export default CreateWallet
