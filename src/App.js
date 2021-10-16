import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';

const DUUMMY_EXPENSE = [
  {
    id: 0,
    title: "Car Insurrance",
    amount: 5646,
    date: new Date(2020, 2, 21),
  },
  {
    id: 1,
    title: "Gas",
    amount: 465,
    date: new Date(2021, 2, 22),
  },
  {
    id: 2,
    title: "Electricity",
    amount: 54,
    date: new Date(2019, 2, 23),
  },
  {
    id: 3,
    title: "Mobile Bill",
    amount: 465,
    date: new Date(2019, 2, 30),
  },
]

function App() {
  const [expense, setExpense] = useState(DUUMMY_EXPENSE);

  const addExpenseHandler = newExpense => {
    setExpense(prevExpense => {
      return [newExpense, ...prevExpense];
    })
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expense} />
    </>
  );
}

export default App;
