import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (p) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setDate(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = { title, amount, date: new Date(date) };
    p.onSaveExpenseData(obj);
    setTitle("");
    setAmount("");
    setDate("");
    p.onCancel(e);
  };

  const cancelHandler = (e) => {
    p.onCancel(e);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button data-btntype="cancel" type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
