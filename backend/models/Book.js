module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "book",
    {
      bookid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      isbn: {
        type: DataTypes.STRING,
      },
      booktitle: {
        type: DataTypes.STRING,
      },
      publisherid: {
        type: DataTypes.INTEGER,
      },
      genreid: {
        type: DataTypes.INTEGER,
      },
      numcopies: {
        type: DataTypes.INTEGER,
      },
      bookimage: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "book",
      timestamps: false,
    }
  );
