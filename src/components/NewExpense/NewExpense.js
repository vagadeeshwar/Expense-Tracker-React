import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseDefault from "./NewExpenseDefault";

const NewExpense = (p) => {
  const [form, setForm] = useState(
    <NewExpenseDefault onButtonClick={formChangeHandler} />
  );

  const saveExpenseDataHandler = (obj) => {
    const expenseData = { ...obj, id: Math.random().toString() };
    p.onAddExpenseData(expenseData);
  };

  function formChangeHandler(e) {
    e.target.dataset.btntype === "new"
      ? setForm(
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={formChangeHandler}
          />
        )
      : setForm(<NewExpenseDefault onButtonClick={formChangeHandler} />);
  }

  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
