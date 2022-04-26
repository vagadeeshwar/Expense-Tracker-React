import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearSelectHandler = (option) => {
    setFilteredYear(option);
  };

  let filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelect={yearSelectHandler}
        initialValue={filteredYear} //sets useState initial value to select initial value
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
