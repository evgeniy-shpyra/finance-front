import React from "react"
import { fetchCategories } from "../../api/categoryApi"
import { ICategory } from "../../types/Category"
import { IHistory, IHistoryFetchParams } from "../../types/History"
import { fetchHistory } from "../../api/historyApi"
import Title from "../../components/Title/Title"
import History from "../../components/History"
import { fetchTransactionType } from "../../api/transactionTypeApi"
import { ITransactionType } from "../../types/TransactionType"

const Histories = () => {
    const [categories, setCategories] = React.useState<ICategory[]>([])
    const [transactionTypes, setTransactionTypes] = React.useState<
        ITransactionType[]
    >([])
    const [history, setHistory] = React.useState<IHistory[]>([])

    const categoryRef = React.useRef<HTMLSelectElement>(null)

    React.useEffect(() => {
        fetchHistory()
            .then((response) => {
                setHistory(response)
                return fetchCategories()
            })
            .then((response) => {
                setCategories(response)
                return fetchTransactionType()
            })
            .then((response) => {
                setTransactionTypes(response)
            })
    }, [])

    const handleFilterHistory = (query: IHistoryFetchParams) => {
        const queryFetching: IHistoryFetchParams = {}

        if (query.categoryId && query.categoryId != -1) {
            queryFetching.categoryId = query.categoryId
        } else if (query.transactionTypeId && query.transactionTypeId != -1) {
            queryFetching.transactionTypeId = query.transactionTypeId
        }

        fetchHistory(queryFetching).then((response) => {
            setHistory(response)
            return fetchCategories()
        })
    }

    return (
        <div>
            <Title text='History' />
            <div className='pb-[40px]'>
                <table className='creating-table'>
                    <tbody>
                        <tr>
                            <td>Categories:</td>
                            <td>
                                <select
                                    onChange={(event) =>
                                        handleFilterHistory({
                                            categoryId: Number(
                                                event.target.value
                                            ),
                                        })
                                    }
                                    ref={categoryRef}
                                    defaultValue='-1'
                                >
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
                            <td>Transaction type:</td>
                            <td>
                                <select
                                    onChange={(event) =>
                                        handleFilterHistory({
                                            transactionTypeId: Number(
                                                event.target.value
                                            ),
                                        })
                                    }
                                    ref={categoryRef}
                                    defaultValue='-1'
                                >
                                    <option value='-1'>All</option>
                                    {transactionTypes.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Category</th>
                        <th>Sending wallet</th>
                        <th>Receiving Wallet</th>
                        <th>Price</th>
                        <th>Left balance</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((h) => (
                        <History
                            key={h.id}
                            id={h.id}
                            leftBalance={h.leftBalance}
                            price={h.price}
                            walletFrom={h.walletFrom}
                            walletTo={h.walletTo}
                            category={h.category}
                            createAt={h.createAt}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Histories
