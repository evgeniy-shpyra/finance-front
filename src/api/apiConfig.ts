export const url = "https://localhost:7012/api"

export const routes = {
    wallet: {
        fetch: "/Wallet",
        delete: "/Wallet",
        create: "/Wallet",
    },
    category: {
        fetch: "/FinancialCategory",
        delete: "/FinancialCategory",
        create: "/FinancialCategory",
    },
    transaction: {
        create: "/Transaction",
    },
    transactionType: {
        fetch: "/Transaction/type",
    },
    history: {
        fetch: "/History",
    },
}
