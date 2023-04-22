module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "librarian",
    {
      librarianid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      staffid: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "librarian",
      timestamps: false,
    }
  );
