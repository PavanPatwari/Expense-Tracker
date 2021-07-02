import  './App.css';
import {useState} from "react"
import Header from "./Components/Header"
import Balance from "./Components/Balance"
import ExpenseIncome from "./Components/ExpenseIncome"
import History from "./Components/History"
 import NewTransaction from "./Components/NewTransaction"

import { GlobalProvider } from './Components/Context/Globalstate';

function App() {

  const [openModal, setOpenModal] = useState(false)

    const openModalfunction = () => {
        (openModal) ? setOpenModal(false) : setOpenModal(true)
    } 

  return (
    <GlobalProvider>
    <div className="App">
     <Header />
     <div className="Container">
     {(openModal ? <NewTransaction setModal={setOpenModal}/> : '' )}
     {
       (!openModal) ?  <div><Balance /> <ExpenseIncome /> <History /> <h1 className="newTraction-btn" onClick={openModalfunction}>+</h1> </div>: ""
       
     }
     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
