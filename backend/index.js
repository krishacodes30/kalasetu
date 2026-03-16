// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ HOME ROUTE
// app.get("/", (req, res) => {
//   res.json({
//     status: "OK",
//     message: "Kala Setu API is running 🚀",
//   });
// });

// app.post("/chat", (req, res) => {
//   const { message } = req.body;

//   // SIMPLE LOGIC (replace with AI later)
//   let reply = "I didn't understand.";

//   if (message.toLowerCase().includes("product")) {
//     reply = "We have handmade crafts, textiles, and pottery.";
//   }

//   if (message.toLowerCase().includes("sell")) {
//     reply = "You can register as an artisan and upload products.";
//   }

//   res.json({ reply });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend working 🚀" });
});

// API route
app.get("/api/data", (req, res) => {
  res.json({
    success: true,
    data: "Hello from backend 🎯",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});