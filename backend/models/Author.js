module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "author",
    {
      authorid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "author",
      timestamps: false,
    }
  );
