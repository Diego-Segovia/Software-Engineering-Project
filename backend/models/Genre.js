module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "genre",
    {
      genreid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      genredesc: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "genre",
      timestamps: false,
    }
  );
