export default function NewExpenseDefault(p) {
  function clickHandler(e) {
    p.onButtonClick(e);
  }

  return (
    <button data-btntype="new" onClick={clickHandler}>
      New Expense
    </button>
  );
}
