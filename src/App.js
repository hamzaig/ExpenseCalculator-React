import './App.css';
import Expenses from './components/Expense/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expense = [
    {
      id: 0,
      title: "Car Insurrance",
      amount: 5646,
      date: new Date(2014, 2, 21),
    },
    {
      id: 1,
      title: "Gas",
      amount: 465,
      date: new Date(2014, 2, 22),
    },
    {
      id: 2,
      title: "Electricity",
      amount: 54,
      date: new Date(2014, 2, 23),
    },
    {
      id: 3,
      title: "Mobile Bill",
      amount: 465,
      date: new Date(2014, 2, 30),
    },
  ]
  return (
    <>
      <NewExpense />
      <Expenses expense={expense} />
    </>
  );
}

export default App;
