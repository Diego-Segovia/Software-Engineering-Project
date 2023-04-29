module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "users",
    {
      userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      userimage: {
        type: DataTypes.STRING,
      },
      authusername: {
        type: DataTypes.STRING,
      },
      authpassword: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
