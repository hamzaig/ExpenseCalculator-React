import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import ExpensesChat from "./ExpensesChat";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expense.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChat expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}
export default Expenses;