import React from "react"
import { deleteWallet, fetchWallets } from "../../api/walletApi"
import { IWallet } from "../../types/Wallet"
import Wallet from "../../components/Wallet"
import Title from "../../components/Title/Title"
import "./wallet.scss"
import { MessageContext } from "../../App"
import { NavLink } from "react-router-dom"

const Wallets = () => {
    const [wallets, setWallets] = React.useState<IWallet[]>([])

    const messageContext = React.useContext(MessageContext)

    React.useEffect(() => {
        fetchWallets().then((response) => {
            setWallets(response)
        })
    }, [])

    const handleDeleteWallet = (id: number) => {
        deleteWallet(id).then((response) => {
            if (response) {
                messageContext?.createMessage("Wallet successfully deleted")
                setWallets((prev) => prev.filter((item) => item.id != id))
            } else messageContext?.createMessage("An error occurs")
        })
    }

    return (
        <div>
            <Title text='Wallets' />
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {wallets.map((w) => (
                        <Wallet
                            key={w.id}
                            id={w.id}
                            name={w.name}
                            balance={w.balance}
                            handleDeleteWallet={handleDeleteWallet}
                        />
                    ))}
                </tbody>
            </table>
            <NavLink className='mt-[20px] inline-block' to='/createWallet'>
                Create wallet
            </NavLink>
        </div>
    )
}

export default Wallets
