import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [inputTitle, setInputTitle] = useState("");
    // const [inputAmount, setInputAmount] = useState("");
    // const [inputDate, setInputDate] = useState("");

    const [userInput, setUserInput] = useState({
        inputTitle: "",
        inputAmount: "",
        inputDate: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userInput.inputTitle,
            amount: userInput.inputAmount,
            date: new Date(userInput.inputDate),
        }

        props.onSaveExpenseData(expenseData);
        setUserInput({
            inputTitle: "",
            inputAmount: "",
            inputDate: "",
        });
        // set = "";
        // set = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.inputTitle} onChange={(e) => (setUserInput((previousValues) => ({
                        ...previousValues,
                        inputTitle: e.target.value,
                    })))} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.inputAmount} onChange={(e) => (setUserInput((previousValues) => ({
                        ...previousValues,
                        inputAmount: e.target.value,
                    })))} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-10-01" max="2023-10-01" value={userInput.inputDate} onChange={(e) => (setUserInput((previousValues) => ({
                        ...previousValues,
                        inputDate: e.target.value,
                    })))} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;