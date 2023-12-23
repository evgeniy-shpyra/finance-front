import React from "react"
import { IWallet } from "../types/Wallet"

interface WalletProps extends IWallet {
    handleDeleteWallet: (id: number) => void
}

const Wallet: React.FC<WalletProps> = ({
    id,
    name,
    balance,
    handleDeleteWallet,
}) => {
    return (
        <tr>
            <td className='text-center'>{id}</td>
            <td>{name}</td>
            <td className='text-center'>{balance}</td>
            <td
                className='cursor-pointer'
                title='Delete wallet'
                onClick={() => handleDeleteWallet(id)}
            >
                X
            </td>
        </tr>
    )
}

export default Wallet
