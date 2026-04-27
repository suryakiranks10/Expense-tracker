import { useState, useEffect } from "react";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function handleAdd(transaction) {
    setTransactions([...transactions, transaction]);
  }

  function handleDelete(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance income={income} expense={expense} />
      <Chart income={income} expense={expense} />
      <AddTransaction onAdd={handleAdd} />
      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;