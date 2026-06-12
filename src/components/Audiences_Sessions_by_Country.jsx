import { useState, useCallback } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = ["1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h"];
const SORT_OPTIONS = ["Current Week", "Last Week", "Last Month"];

const COLOR_LOW  = "#2DB88A";
const COLOR_HIGH = "#4DA6E8";

function randVal() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateData() {
  return DAYS.map((day) => ({
    day,
    values: HOURS.map(() => randVal()),
  }));
}

function getCellColor(v) {
  if (v <= 50) {
    const t = v / 50;
    const r = Math.round(45 + 45 * t);
    const g = Math.round(184 - 20 * t);
    const b = Math.round(138 - 30 * t);
    return `rgb(${r},${g},${b})`;
  } else {
    const t = (v - 51) / 49;
    const r = Math.round(77 + 20 * t);
    const g = Math.round(166 - 20 * t);
    const b = Math.round(232 - 20 * t);
    return `rgb(${r},${g},${b})`;
  }
}

function HeatCell({ value, day, hour }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "40px",
        borderRadius: "4px",
        backgroundColor: getCellColor(value),
        cursor: "pointer",
        opacity: hovered ? 0.75 : 1,
        transition: "opacity 0.15s",
        flex: 1,
        minWidth: 0,
      }}
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: "12px",
            color: "#222",
            whiteSpace: "nowrap",
            zIndex: 20,
            pointerEvents: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          {day} {hour}: {value} sessions
        </div>
      )}
    </div>
  );
}

export default function AudienceHeatmap() {
  const [sortBy, setSortBy] = useState("Current Week");
  const [data, setData] = useState(() => generateData());

  const handleSort = useCallback((e) => {
    setSortBy(e.target.value);
    setData(generateData());
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1.25rem", height:'430px', maxWidth: "100%" }}>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", color: "#7a8a95" }}>
          <span style={{ width: "16px", height: "16px", borderRadius: "3px", background: COLOR_LOW, display: "inline-block" }} />
          0 – 50
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", color: "#7a8a95" }}>
          <span style={{ width: "16px", height: "16px", borderRadius: "3px", background: COLOR_HIGH, display: "inline-block" }} />
          51 – 100
        </div>
      </div>

      <div>
        <div style={{ minWidth: "100%", height:"100%" }}>
          {data.map(({ day, values }) => (
            <div key={day} style={{ display: "flex", alignItems: "center", gap: "2px", marginBottom: "2px" }}>
              <div style={{ width: "40px", flexShrink: 0, fontSize: "12px", color: "#888", textAlign: "right", paddingRight: "8px" }}>
                {day}
              </div>
              {values.map((val, i) => (
                <HeatCell key={i} value={val} day={day} hour={HOURS[i]} />
              ))}
            </div>
          ))}

          <div style={{ display: "flex", alignItems: "center", gap: "2px", marginTop: "5px" }}>
            <div style={{ width: "40px", flexShrink: 0 }} />
            {HOURS.map((h) => (
              <div key={h} style={{ flex: 1, minWidth: 0, textAlign: "center", fontSize: "11px", color: "#999" }}>
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}