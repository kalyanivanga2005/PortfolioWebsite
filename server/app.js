const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Test API
app.get("/", (req, res) => {
    res.send("Portfolio Backend Server Running");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});