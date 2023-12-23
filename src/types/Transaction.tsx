export interface ICreateTransaction {
    price: number
    sendingWalletId?: number
    receivingWalletId?: number
    financialCategoryId: number
}
