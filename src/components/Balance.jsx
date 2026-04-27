function Balance({ income, expense }) {
  const balance = income - expense;

  return (
    <div className="balance-box">
      <p className="balance-label">Total Balance</p>
      <h2 style={{ color: balance >= 0 ? "#1D9E75" : "#D85A30", fontSize: "28px", margin: "6px 0 12px" }}>
        ₹{balance.toLocaleString()}
      </h2>
      <div className="balance-row">
        <div>
          <p className="balance-label">Income</p>
          <p className="income">₹{income.toLocaleString()}</p>
        </div>
        <div>
          <p className="balance-label">Expense</p>
          <p className="expense">₹{expense.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;