import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");
    console.log(inputTitle, inputAmount, inputDate);
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={(e) => (setInputTitle(e.target.value))} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={(e) => (setInputAmount(e.target.value))} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2021-10-01" max="2023-10-01" onChange={(e) => (setInputDate(e.target.value))} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;