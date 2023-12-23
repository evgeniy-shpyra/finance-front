export interface IHistory {
    id: number
    leftBalance: number
    price: string
    walletFrom: string
    walletTo: string
    category: string
    createAt: Date
}



export interface IHistoryFetchParams {
  categoryId?: number
  transactionTypeId?: number
}
