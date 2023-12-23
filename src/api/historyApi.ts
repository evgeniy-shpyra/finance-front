import { IHistory, IHistoryFetchParams } from "../types/History"
import { url, routes } from "./apiConfig"

export const fetchHistory = async (options: IHistoryFetchParams | void) => {
    let params = ""
    if (options?.categoryId) {
        params = `/ByCategory/${options.categoryId}`
    } else if (options?.transactionTypeId) {
        params = `/ByTransactionType/${options.transactionTypeId}`
    }

    const response = await fetch(`${url}${routes.history.fetch}${params}`)
    const histories: IHistory[] = await response.json()
    return histories
}
