import React, {useState, useContext} from 'react'
import "./NewTransaction.css"
import { GlobalContext } from './Context/Globalstate'

function NewTransaction({setModal}) {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const {addTransaction} = useContext(GlobalContext);

    const closeModal = () => {
            setModal(false)
    }

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransactionDetails = {
            id : Math.floor(Math.random() * 10000),
            text ,
            amount: +amount
        }

        addTransaction(newTransactionDetails)
        setText('')
        setAmount('')
        setModal(false);
    }

    return (
        <div className="newTransaction">
            <div className="modal_container">
                <div className="newTransaction_header">
                    <h2 className="transaction">New Transaction</h2>
                    <strong><span onClick={closeModal}>X</span></strong>
                </div>
                <form className="transaction_form" onSubmit={onSubmit}>

                    <input type="text" 
                    className="transaction_input" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter text..." required/>

                    <input type="number" 
                    className="transaction_input"
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Amount( Enter '-' if expense )"  required/>

                    <button className="transaction_btn">Add Transaction</button>
                </form>
            </div>
        </div>
    )
}

export default NewTransaction
