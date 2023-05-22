import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            onfilterChange={filterChangeHandler}
            selectedYear={selectedYear}
          />
          <ExpensesChart expenses={filteredExpense} />
          <ExpensesList items={filteredExpense} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
