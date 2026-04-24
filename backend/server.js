const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
 res.send("Smart City AI API Running");
});

app.post("/api/classify",(req,res)=>{
 res.json({
   issue_type:"pothole",
   urgency:"high",
   description:"Road damage detected",
   recommended_department:"Public Works"
 });
});

app.post("/api/predict",(req,res)=>{
 res.json({
   risk:"High",
   explanation:"Clustered reports indicate flood risk"
 });
});

app.listen(3000,()=>{
 console.log("Server running");
});
