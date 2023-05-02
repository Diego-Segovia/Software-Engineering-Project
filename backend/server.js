const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");

const booksRoutes = require("./routes/books-routes");
const loanRoutes = require("./routes/loans-routes");
<<<<<<< HEAD
const userRoutes = require("./routes/users-routes");
=======
const usersRoutes = require("./routes/users-routes");
>>>>>>> f536cb2eabab4ba69bf8f97e7cdd16901b0be2bf
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/books", booksRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/users", usersRoutes);

const startServer = async () => {
  await db.sequelize.sync();
  app.listen(3005, function () {
    console.log("Server started on port: 3005");
  });
};

startServer();
