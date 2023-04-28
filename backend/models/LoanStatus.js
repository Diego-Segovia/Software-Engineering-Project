module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "loan_status",
    {
      statusid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      statusdesc: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "loan_status",
      timestamps: false,
    }
  );
