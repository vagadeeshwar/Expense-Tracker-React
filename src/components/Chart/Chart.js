import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(p) {
  const max = Math.max(...p.dataPoints.map((data) => data.value));

  return (
    <div className="chart">
      {p.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          max={max}
          value={data.value}
          label={data.label}
        />
      ))}
    </div>
  );
}
