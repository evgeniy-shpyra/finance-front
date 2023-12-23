import { ICreateTransaction } from "./../types/Transaction"
import { url, routes } from "./apiConfig"

export const createTransaction = async (transaction: ICreateTransaction) => {
    const response = await fetch(`${url}${routes.transaction.create}`, {
        method: "POST",
        body: JSON.stringify(transaction),
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
