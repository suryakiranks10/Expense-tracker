function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Add one above!</p>;
  }

  return (
    <div className="list">
      <h3>Transactions</h3>
      {transactions.map((t) => (
        <div key={t.id} className={`transaction-item ${t.type}`}>
          <span>{t.text}</span>
          <span>
            {t.type === "income" ? "+" : "-"}₹{t.amount.toLocaleString()}
          </span>
          <button onClick={() => onDelete(t.id)} className="delete-btn">
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;