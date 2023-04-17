const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 8080;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const questionRouter = require("./routes/questions");
const mentorRouter = require("./routes/mentors");

app.use("/api/questions", questionRouter);
app.use("/api/mentors", mentorRouter);

app.listen(port, async (err) => {
  if (err) return console.loge(err);
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connected to database"));
  } catch (error) {
    console.log("db error");
  }
  console.log("Server running on port: ", port);
});
