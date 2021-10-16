import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expense.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>There Is Noting on That Date</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />));
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
}
export default Expenses;