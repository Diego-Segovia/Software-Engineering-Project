require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  dialect: "postgres",
});

//const AuthorBook = require("./AuthorBook")(sequelize, DataTypes);
const Book = require("./Book")(sequelize, DataTypes);
const Author = require("./Author")(sequelize, DataTypes);

Book.belongsToMany(Author, { through: "author_book", foreignKey: "bookid" });
Author.belongsToMany(Book, { through: "author_book", foreignKey: "authorid" });

const db = {
  sequelize,
  Author,
  Book,
};

module.exports = db;
