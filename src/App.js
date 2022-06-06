import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expense";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  function addExpense(amountInput, descriptionInput) {
    let id = expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1;

    let newExpense = expenses.concat({
      id: id,
      amount: amountInput,
      description: descriptionInput,
    });

    setTotal(total + Number(amountInput));
    setExpenses(newExpense);
  }

  function removeExpense(id, amount) {
    let filtered = expenses.filter((expense) => expense.id != id);
    setTotal(total - amount);
    setExpenses(filtered);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          {/* total balance */}
          <Balance total={total} />
          {/* input in add */}
          <Add add={addExpense} />
          {/* expense in expense */}
          {expenses.map((expense) => (
            <Expenses data={expense} remove={removeExpense} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
