module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "library_patron",
    {
      patronid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      membershipid: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "library_patron",
      timestamps: false,
    }
  );
