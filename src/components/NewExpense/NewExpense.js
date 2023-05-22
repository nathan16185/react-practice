import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDiplayForm] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setDiplayForm(false);
  };

  const formDisplayHandler = () => {
    setDiplayForm(true);
  };

  const onFormCancel = (displayForm) => {
    setDiplayForm(displayForm);
  };
  return (
    <div className="new-expense">
      {!displayForm && (
        <button type="button" onClick={formDisplayHandler}>
          Add New Expense
        </button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={onFormCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
