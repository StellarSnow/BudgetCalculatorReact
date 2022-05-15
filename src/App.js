import './App.css';
import BudgetTitle from './components/BudgetTitle';
import BudgetValue from './components/BudgetValue';
import BudgetIncome from './components/BudgetIncome';
import BudgetExpenses from './components/BudgetExpenses';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import TransactionList from './components/TransactionList';
import { useState } from 'react';

function App() {
  const [transactions, setTransaction] = useState(new TransactionList());
  const [hack, setHack] = useState(0);

  const addTransaction = (description, amount) => {  
    setTransaction((prevState) => { 
      prevState.addNewTransaction(amount, description);
      return prevState;
    });
    setHack(hack + 1);  
  }

  const deleteTransaction = (id) => {
    setTransaction((prevState) => {  
      prevState.removeTransaction(id);
      return prevState;
    }) 
    setHack(hack + 1);  
  }

  return (
    <div>
      <div className="top">
        <div className="budget">
          <BudgetTitle />
          <BudgetValue budgetValue={transactions.calcBudgetValue()} />
          <BudgetIncome totalIncome={transactions.addIncomes()} />
          <BudgetExpenses expensesValue={transactions.addExpenses()} />
        </div>
      </div>

      <div className="bottom">
        <AddTransaction addTransaction={addTransaction} />
        <div className="container">
          <IncomeList transactions={transactions} deleteTransaction={deleteTransaction}/>
          <ExpenseList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
      </div>
    </div>
  );
}

export default App;
