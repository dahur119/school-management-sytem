const express = require("express");
const cors = require("cors");
const path = require("path");
const apiRouter = require("./routes/api");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://172.20.10.14:3000"],
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "..", "public", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//

app.use("/api", apiRouter);

module.exports = app;
