import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ReportForm from "./components/ReportForm";
import AlertCard from "./components/AlertCard";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", fontFamily: "sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ background: "#1D9E75", padding: "16px 20px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontSize: 16 }}>●</span>
        </div>
        <span style={{ color: "white", fontWeight: 600, fontSize: 18 }}>PulseCity</span>
        <span style={{ marginLeft: "auto", background: "rgba(255,255,255,0.2)", color: "white", fontSize: 12, padding: "3px 10px", borderRadius: 99 }}>Kuala Lumpur</span>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", background: "white", borderBottom: "1px solid #eee" }}>
        {["dashboard", "report", "alerts"].map(p => (
          <button key={p} onClick={() => setPage(p)} style={{
            flex: 1, padding: "12px 0", border: "none", background: "none", cursor: "pointer",
            fontWeight: page === p ? 600 : 400,
            color: page === p ? "#1D9E75" : "#888",
            borderBottom: page === p ? "2px solid #1D9E75" : "2px solid transparent",
            fontSize: 13, textTransform: "capitalize"
          }}>{p}</button>
        ))}
      </div>

      {/* Pages */}
      <div style={{ padding: 16 }}>
        {page === "dashboard" && <Dashboard />}
        {page === "report" && <ReportForm />}
        {page === "alerts" && <AlertCard />}
      </div>

    </div>
  );
}

export default App;