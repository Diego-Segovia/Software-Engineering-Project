module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "publisher",
    {
      publisherid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      publishername: {
        type: DataTypes.STRING,
      },
      publishyear: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "publisher",
      timestamps: false,
    }
  );
