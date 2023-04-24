module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "fine",
    {
      fineid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      fineamt: {
        type: DataTypes.INTEGER,
      },
      finedesc: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "fine",
      timestamps: false,
    }
  );
