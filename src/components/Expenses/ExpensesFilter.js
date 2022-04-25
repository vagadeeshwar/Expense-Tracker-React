import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (p) => {
  // const [option, setOption] = useState("2022");

  function changeHandler(e) {
    const option = e.target.value;
    p.onYearSelect(option);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={p.initialValue} onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
