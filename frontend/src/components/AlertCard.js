const alerts = [
  {
    area: "Chow Kit / Sentul corridor",
    reports: 23,
    confidence: 74,
    risk: "High",
    explanation: "23 drain blockage reports in 4km radius over 6 hours. Pattern matches pre-flood signature from Nov 2024. Immediate action recommended.",
    riskColor: { bg: "#FCEBEB", color: "#E24B4A" },
  },
  {
    area: "Kepong / Sri Damansara",
    reports: 14,
    confidence: 51,
    risk: "Medium",
    explanation: "14 reports of overflowing drains near low-lying residential areas. Rain forecast in next 3 hours increases risk level.",
    riskColor: { bg: "#FAEEDA", color: "#BA7517" },
  },
  {
    area: "Wangsa Maju",
    reports: 8,
    confidence: 32,
    risk: "Low",
    explanation: "8 minor drain blockage reports. No immediate flood risk but requires maintenance within 48 hours.",
    riskColor: { bg: "#f0f0f0", color: "#888" },
  },
];

function AlertCard() {
  return (
    <div>

      {/* Header */}
      <div style={{ background: "white", borderRadius: 12, padding: 16, border: "0.5px solid #eee", marginBottom: 16 }}>
        <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px", color: "#333" }}>AI flood risk predictions</p>
        <p style={{ fontSize: 12, color: "#888", margin: 0 }}>Gemini detects patterns across citizen reports and flags flood hotspots before they happen.</p>
      </div>

      {/* Alert cards */}
      {alerts.map((alert, i) => (
        <div key={i} style={{
          background: "white", borderRadius: 12, padding: 16, marginBottom: 12,
          border: alert.risk === "High" ? "2px solid #E24B4A" : "0.5px solid #eee"
        }}>

          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: alert.riskColor.color }} />
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color: "#333" }}>{alert.area}</p>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: alert.riskColor.bg, color: alert.riskColor.color }}>
              {alert.risk} risk
            </span>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
            <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 8, padding: "8px 12px" }}>
              <p style={{ fontSize: 11, color: "#888", margin: "0 0 2px" }}>Reports</p>
              <p style={{ fontSize: 16, fontWeight: 600, margin: 0, color: "#333" }}>{alert.reports}</p>
            </div>
            <div style={{ flex: 1, background: "#f8f8f8", borderRadius: 8, padding: "8px 12px" }}>
              <p style={{ fontSize: 11, color: "#888", margin: "0 0 2px" }}>AI confidence</p>
              <p style={{ fontSize: 16, fontWeight: 600, margin: 0, color: alert.riskColor.color }}>{alert.confidence}%</p>
            </div>
          </div>

          {/* Confidence bar */}
          <div style={{ background: "#f0f0f0", borderRadius: 4, height: 6, marginBottom: 10 }}>
            <div style={{ width: `${alert.confidence}%`, background: alert.riskColor.color, height: 6, borderRadius: 4 }} />
          </div>

          {/* Explanation */}
          <p style={{ fontSize: 12, color: "#666", margin: 0, lineHeight: 1.6 }}>{alert.explanation}</p>

        </div>
      ))}

    </div>
  );
}

export default AlertCard;