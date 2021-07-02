import React, {useContext} from 'react'
import "./ExpenseIncome.css"
import { GlobalContext } from './Context/Globalstate'

function ExpenseIncome() {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
                .filter(item => item > 0)
                .reduce((acc, item) => (acc += item), 0);

    const expense = amounts.
                    filter(item => item<0)
                    .reduce((acc, item) => (acc += item), 0)

    return (
        <div className="expenseIncome">
            <div className="Income">
                <h4>Income</h4>
                <p className="incomAmount"> ₹<strong>{income}</strong></p>
            </div>
            <div className="Expense">
                <h4>Expense</h4>
                <p className="expenseAmount"> ₹<strong>{Math.abs(expense)}</strong></p>
            </div>      
        </div>
    )
}

export default ExpenseIncome
