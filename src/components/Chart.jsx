import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

function Chart({ income, expense }) {
  if (income === 0 && expense === 0) return null;

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  const COLORS = ["#1D9E75", "#D85A30"];

  return (
    <div className="chart-box">
      <PieChart width={280} height={220}>
        <Pie
          data={data}
          cx={130}
          cy={100}
          outerRadius={80}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Chart;