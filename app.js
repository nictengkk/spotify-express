const express = require("express");
const cors = require("cors");
const app = express();
const index = require("./routes/index/index");
const cookieParser = require("cookie-parser");
const isDev = process.env.NODE_ENV !== "production";

require("dotenv").config();

const whitelist = [];
if (isDev) {
  whitelist.push("http://localhost:3000");
}

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
  // allowedHeaders: ["Content-Type", "Authorization"]
};

// app.options(cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", index);

module.exports = app;
