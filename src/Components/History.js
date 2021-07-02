import React, {useContext, useState} from 'react'
import { GlobalContext } from './Context/Globalstate'
import Transaction from './Transaction'
import "./History.css"

function History() {

    const context = useContext(GlobalContext)
    let transactions = context.transactions
   

    return (
        <div className="history">
            <h2>Transaction History ({context.transactions.length})</h2>
            {
                transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))
            }
        </div>
    )
}

export default History
