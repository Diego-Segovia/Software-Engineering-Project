const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");

const booksRoutes = require("./routes/books-routes");
const app = express();

app.use(cors());
app.use(booksRoutes);

const startServer = async () => {
  await db.sequelize.sync();
  app.listen(3005, function () {
    console.log("Server started on port: 3005");
  });
};

startServer();
