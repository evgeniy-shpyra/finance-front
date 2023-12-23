import { ITransactionType } from "../types/TransactionType"
import { url, routes } from "./apiConfig"

export const fetchTransactionType = async () => {
    const response = await fetch(`${url}${routes.transactionType.fetch}`)
    const wallets: ITransactionType[] = await response.json()
    return wallets
}
