import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(p) {
  return !p.items.length ? (
    <p className="expenses-list__fallback">No expenses found.</p>
  ) : (
    <ul className="expenses-list">
      {p.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
