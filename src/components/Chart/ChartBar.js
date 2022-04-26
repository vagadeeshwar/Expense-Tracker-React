import "./ChartBar.css";

export default function ChartBar(p) {
  let barFillHeight = "0%";

  if (p.max > 0) {
    barFillHeight = Math.round((p.value / p.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{p.label}</div>
    </div>
  );
}
