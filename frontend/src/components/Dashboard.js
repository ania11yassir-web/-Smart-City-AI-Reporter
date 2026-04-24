const stats = [
  { label: "Active reports today", value: "247", sub: "+38 in last hour", color: "#1D9E75" },
  { label: "AI-predicted alerts", value: "3", sub: "hotspots flagged", color: "#E8A020" },
  { label: "Resolved (48hr)", value: "182", sub: "avg 6.2h response", color: "#1D9E75" },
  { label: "City health score", value: "74/100", sub: "+4 from last week", color: "#378ADD" },
];

const issues = [
  { label: "Flooding / drains", count: 89, max: 89, color: "#378ADD" },
  { label: "Road damage", count: 61, max: 89, color: "#EF9F27" },
  { label: "Illegal dumping", count: 53, max: 89, color: "#639922" },
  { label: "Streetlights", count: 44, max: 89, color: "#7F77DD" },
];

const reports = [
  { title: "Blocked monsoon drain", location: "Jalan Ipoh", time: "4 min ago", urgency: "Urgent", color: "#E24B4A", bg: "#FCEBEB" },
  { title: "Pothole (large)", location: "Jalan Duta", time: "11 min ago", urgency: "Medium", color: "#BA7517", bg: "#FAEEDA" },
  { title: "Broken streetlight", location: "Wangsa Maju", time: "19 min ago", urgency: "Low", color: "#888", bg: "#f0f0f0" },
  { title: "Illegal dumping", location: "Kepong", time: "32 min ago", urgency: "Medium", color: "#BA7517", bg: "#FAEEDA" },
  { title: "Flooded road", location: "Chow Kit", time: "45 min ago", urgency: "Urgent", color: "#E24B4A", bg: "#FCEBEB" },
];

function Dashboard() {
  return (
    <div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "white", borderRadius: 12, padding: "14px", border: "0.5px solid #eee" }}>
            <p style={{ fontSize: 12, color: "#888", margin: "0 0 4px" }}>{s.label}</p>
            <p style={{ fontSize: 22, fontWeight: 600, margin: "0 0 2px", color: s.color }}>{s.value}</p>
            <p style={{ fontSize: 11, color: "#aaa", margin: 0 }}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Issue breakdown */}
      <div style={{ background: "white", borderRadius: 12, padding: 16, marginBottom: 16, border: "0.5px solid #eee" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#555", margin: "0 0 12px" }}>Issue breakdown</p>
        {issues.map((item, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 12, color: "#666" }}>{item.label}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: item.color }}>{item.count}</span>
            </div>
            <div style={{ background: "#f0f0f0", borderRadius: 4, height: 8 }}>
              <div style={{ width: `${(item.count / item.max) * 100}%`, background: item.color, height: 8, borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent reports */}
      <div style={{ background: "white", borderRadius: 12, padding: 16, border: "0.5px solid #eee" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#555", margin: "0 0 12px" }}>Recent reports</p>
        {reports.map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < reports.length - 1 ? "0.5px solid #f0f0f0" : "none" }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 2px", color: "#333" }}>{r.title}</p>
              <p style={{ fontSize: 11, color: "#aaa", margin: 0 }}>{r.location} · {r.time}</p>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 99, background: r.bg, color: r.color }}>{r.urgency}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;