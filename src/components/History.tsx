import React from "react"
import { IHistory } from "../types/History"

const History: React.FC<IHistory> = ({
    id,
    leftBalance,
    price,
    walletFrom,
    walletTo,
    category,
    createAt,
}) => {
    const date = new Date(createAt)
   
    return (
        <tr>
            <td className='text-center'>{id}</td>
            <td>{category}</td>
            <td className='text-center'>{walletFrom}</td>
            <td className='text-center'>{walletTo}</td>
            <td className='text-center'>{price}</td>
            <td className='text-center'>{leftBalance}</td>
            <td className='text-center'>
                {date.toLocaleString()} 
            </td>
        </tr>
    )
}

export default History
