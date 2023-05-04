require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  dialect: "postgres",
  logging: false,
});

const Book = require("./Book")(sequelize, DataTypes);
const Author = require("./Author")(sequelize, DataTypes);
const Genre = require("./Genre")(sequelize, DataTypes);
const Publisher = require("./Publisher")(sequelize, DataTypes);
const Loan = require("./Loan")(sequelize, DataTypes);
const Users = require("./Users")(sequelize, DataTypes);
const Fine = require("./Fine")(sequelize, DataTypes);
const LoanStatus = require("./LoanStatus")(sequelize, DataTypes);

// Author Book many-to-many relationship
Book.belongsToMany(Author, { through: "author_book", foreignKey: "bookid" });
Author.belongsToMany(Book, { through: "author_book", foreignKey: "authorid" });

// Book to Genre relationship
Book.belongsTo(Genre, { foreignKey: "genreid" });

// Book to Publisher relationship
Book.belongsTo(Publisher, { foreignKey: "publisherid" });

Book.hasMany(Loan, { foreignKey: "bookid" });
Loan.belongsTo(Book, { foreignKey: "bookid" });

Users.hasMany(Loan, { foreignKey: "patronid" });
Loan.belongsTo(Users, { foreignKey: "patronid" });

Fine.hasMany(Loan, { foreignKey: "fineid" });
Loan.belongsTo(Fine, { foreignKey: "fineid" });

Loan.belongsTo(LoanStatus, { foreignKey: "statusid" });
LoanStatus.hasMany(Loan, { foreignKey: "statusid" });

const db = {
  sequelize,
  Author,
  Book,
  Genre,
  Publisher,
  Loan,
  Users,
  LoanStatus,
  Fine,
};

module.exports = db;
