import { ICreateWallet, IWallet } from "../types/Wallet"
import { url, routes } from "./apiConfig"

export const fetchWallets = async () => {
    const response = await fetch(`${url}${routes.wallet.fetch}`)
    const wallets: IWallet[] = await response.json()
    return wallets
}

export const deleteWallet = async (id: number) => {
    const response = await fetch(`${url}${routes.wallet.delete}/${id}`, {
        method: "DELETE",
    })
    if (response.status == 204) {
        return true
    } else {
        return false
    }
}

export const createWallet = async (wallet: ICreateWallet) => {
    const response = await fetch(`${url}${routes.wallet.create}`, {
        method: "POST",
        body: JSON.stringify(wallet),
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
