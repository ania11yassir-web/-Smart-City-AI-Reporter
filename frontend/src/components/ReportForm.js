import { useState } from "react";

function ReportForm() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    if (!image && !description) return;
    setLoading(true);
    setResult(null);

try {
  const formData = new FormData();
  if (image) formData.append("image", image);
  formData.append("description", description);
  formData.append("location", location);

  const response = await fetch("https://elderly-suspense-treachery.ngrok-free.dev/api/classify", {
    method: "POST",
    headers: { "ngrok-skip-browser-warning": "true" },
    body: formData,
  });

  const data = await response.json();
  setResult({
    issue_type: data.issue_type,
    urgency: data.urgency === "high" ? "Urgent" : data.urgency === "medium" ? "Medium" : "Low",
    description: data.description,
    recommended_department: data.recommended_department,
  });
} catch (error) {
  setResult({
    issue_type: "Connection error",
    urgency: "Low",
    description: "Could not reach the backend. Make sure Person A's server is running.",
    recommended_department: "N/A",
  });
} finally {
  setLoading(false);
}
  };

  const urgencyColor = {
    Urgent: { bg: "#FCEBEB", color: "#E24B4A" },
    Medium: { bg: "#FAEEDA", color: "#BA7517" },
    Low: { bg: "#f0f0f0", color: "#888" },
  };

  return (
    <div>
      <div style={{ background: "white", borderRadius: 12, padding: 16, border: "0.5px solid #eee", marginBottom: 16 }}>
        <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 16px", color: "#333" }}>Submit a report</p>

        {/* Image upload */}
        <div
          onClick={() => document.getElementById("imgInput").click()}
          style={{ border: "1.5px dashed #ccc", borderRadius: 10, padding: 24, textAlign: "center", cursor: "pointer", marginBottom: 12, background: image ? "#f0fff8" : "#fafafa" }}>
          {image ? (
            <div>
              <img src={URL.createObjectURL(image)} alt="preview" style={{ maxHeight: 160, borderRadius: 8, maxWidth: "100%" }} />
              <p style={{ fontSize: 12, color: "#1D9E75", marginTop: 8 }}>Image selected ✓</p>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: 24, margin: "0 0 6px" }}>📷</p>
              <p style={{ fontSize: 13, color: "#888", margin: 0 }}>Tap to upload a photo</p>
              <p style={{ fontSize: 11, color: "#bbb", margin: "4px 0 0" }}>Gemini will auto-detect the issue</p>
            </div>
          )}
          <input id="imgInput" type="file" accept="image/*" style={{ display: "none" }} onChange={e => setImage(e.target.files[0])} />
        </div>

        {/* Description */}
        <textarea
          placeholder="Describe the problem (optional)..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ width: "100%", borderRadius: 8, border: "0.5px solid #ddd", padding: "10px 12px", fontSize: 13, marginBottom: 10, minHeight: 80, resize: "none", boxSizing: "border-box", fontFamily: "sans-serif" }}
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Location (e.g. Jalan Ipoh, KL)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          style={{ width: "100%", borderRadius: 8, border: "0.5px solid #ddd", padding: "10px 12px", fontSize: 13, marginBottom: 14, boxSizing: "border-box" }}
        />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ width: "100%", padding: "12px 0", background: "#1D9E75", color: "white", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {loading ? "Analysing with Gemini AI..." : "Submit Report"}
        </button>
      </div>

      {/* AI Result */}
      {result && (
        <div style={{ background: "white", borderRadius: 12, padding: 16, border: "0.5px solid #eee" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#555", margin: "0 0 12px" }}>Gemini AI classification</p>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <p style={{ fontSize: 15, fontWeight: 600, margin: 0, color: "#333" }}>{result.issue_type}</p>
            <span style={{ fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: urgencyColor[result.urgency]?.bg, color: urgencyColor[result.urgency]?.color }}>
              {result.urgency}
            </span>
          </div>

          <p style={{ fontSize: 13, color: "#666", margin: "0 0 10px", lineHeight: 1.5 }}>{result.description}</p>

          <div style={{ background: "#f0fff8", borderRadius: 8, padding: "10px 12px" }}>
            <p style={{ fontSize: 11, color: "#888", margin: "0 0 2px" }}>Routed to</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#1D9E75", margin: 0 }}>{result.recommended_department}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportForm;