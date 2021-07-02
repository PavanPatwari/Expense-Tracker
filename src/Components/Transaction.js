import React, {useContext} from 'react'
import "./Transaction.css"
import { GlobalContext } from './Context/Globalstate'

function Transaction({transaction}) {

    const sign = transaction.amount < 0 ? "-" : "+"
    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <div className="transaction"> 
        <span className="txn_delete" onClick={() => deleteTransaction(transaction.id)}>X</span>       
            <div className={transaction.amount < 0 ? "minus" : "positive"}>
                <p> {transaction.text} </p>
                <p>{sign}₹{Math.abs(transaction.amount)}</p>     
            </div>
        </div>
    )
}

export default Transaction
