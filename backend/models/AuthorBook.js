module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "author_book",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      authorid: {
        type: DataTypes.INTEGER,
      },
      bookid: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "author_book",
      timestamps: false,
    }
  );
