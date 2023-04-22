module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "membership",
    {
      membershipid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "membership",
      timestamps: false,
    }
  );
