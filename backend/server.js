const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");

const booksRoutes = require("./routes/books-routes");
const loanRoutes = require("./routes/loans-routes");
const usersRoutes = require("./routes/users-routes");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", booksRoutes);
app.use("/api", loanRoutes);
app.use("/api", usersRoutes);

const startServer = async () => {
  await db.sequelize.sync();
  app.listen(3005, function () {
    console.log("Server started on port: 3005");
  });
};

startServer();
