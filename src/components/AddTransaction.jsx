import { useState } from "react";

function AddTransaction({ onAdd}) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("expense");

   function handleSubmit(e) {
        e.preventDefault();
        if (!text || !amount) return;

        onAdd({
            id: Date.now(),
            text,
            amount: parseFloat(amount),
            type,
        });

        setText("");
        setAmount("");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <h3>Add Transaction</h3>
            <input
                type="text"
                placeholder="Enter description..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter amount..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default AddTransaction;
