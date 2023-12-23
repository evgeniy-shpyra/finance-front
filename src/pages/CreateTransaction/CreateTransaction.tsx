import React from "react"
import { MessageContext } from "../../App"
import Title from "../../components/Title/Title"
import { useNavigate } from "react-router-dom"
import { fetchCategories } from "../../api/categoryApi"
import { IWallet } from "../../types/Wallet"
import { ICategory } from "../../types/Category"
import { fetchWallets } from "../../api/walletApi"
import { createTransaction } from "../../api/transactionApi"

const CreateTransaction: React.FC = () => {
    const [price, setPrice] = React.useState("")
    const [wallets, setWallets] = React.useState<IWallet[]>([])
    const [categories, setCategories] = React.useState<ICategory[]>([])

    const navigate = useNavigate()
    const messageContext = React.useContext(MessageContext)

    const categoryRef = React.useRef<HTMLSelectElement>(null)
    const walletFromRef = React.useRef<HTMLSelectElement>(null)
    const walletToRef = React.useRef<HTMLSelectElement>(null)

    React.useEffect(() => {
        fetchWallets()
            .then((response) => {
                setWallets(response)
                return fetchCategories()
            })
            .then((response) => {
                setCategories(response)
            })
    }, [])

    const handleClickBtn = () => {
        const errors: string[] = []
        const categoryId = categoryRef.current?.value
        const walletToId =
            walletToRef.current?.value == "-1"
                ? undefined
                : Number(walletToRef.current?.value)
        const walletFromId =
            walletFromRef.current?.value == "-1"
                ? undefined
                : Number(walletFromRef.current?.value)
        if (price.length == 0) {
            errors.push("Enter the price")
        }
        if (categoryId == "-1" || !categoryId) {
            messageContext?.createMessage("Select the category")
        }
        if (errors.length) {
            messageContext?.createMessage(errors.join("<br>"))
            return
        }

        createTransaction({
            price: Number(price),
            financialCategoryId: Number(categoryId),
            sendingWalletId: walletFromId,
            receivingWalletId: walletToId,
        }).then((response) => {
            if (response) {
                messageContext?.createMessage(
                    "Transaction successfully created"
                )
                navigate("/")
            } else {
                messageContext?.createMessage("An error occurs")
            }
        })
    }

    return (
        <div>
            <Title text='Creating a transaction' />
            <table className='creating-table'>
                <tbody>
                    <tr>
                        <td>Categories:</td>
                        <td>
                            <select ref={categoryRef} defaultValue='-1'>
                                <option value='-1'>All</option>
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Sending wallet:</td>
                        <td>
                            <select ref={walletFromRef} defaultValue='-1'>
                                <option value='-1'>No select</option>
                                {wallets.map((wallet) => (
                                    <option key={wallet.id} value={wallet.id}>
                                        {wallet.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Receiving wallet:</td>
                        <td>
                            <select ref={walletToRef} defaultValue='-1'>
                                <option value='-1'>No select</option>
                                {wallets.map((wallet) => (
                                    <option key={wallet.id} value={wallet.id}>
                                        {wallet.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>
                            <input
                                type='number'
                                onChange={(event) =>
                                    setPrice(event.target.value)
                                }
                                value={price}
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

export default CreateTransaction
