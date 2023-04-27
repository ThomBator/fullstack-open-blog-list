const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const blogRouter = require("./controllers/blogs");
const logger = require("./utils/logger");

const mongoose = require("mongoose");
//strictQuery prevents from writing fields that are not defined in schema
//I think generally it is best to leave it as default true but I guess the course designers want it off for some reason.
mongoose.set("strictQuery", false);
const PORT = process.env.PORT || 3003;

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/api/blog", blogRouter);

module.exports = app;
