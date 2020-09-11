const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const partenaireRoute = require("./routes/partenaireRoutes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use("/partenaire", partenaireRoute);

const db = process.env.db;
const port = process.env.port;

mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((e) => console.log(e.message));

app.listen(port, () => console.log("server started"));
