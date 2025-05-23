const express = require("express");
const { userRoutes } = require("./src/routes/userRoutes");
const { photoRoutes } = require("./src/routes/photoRoutes");
const { searchHistoryRoutes } = require("./src/routes/searchHistoryRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/search-history", searchHistoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the SnapVault App");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
