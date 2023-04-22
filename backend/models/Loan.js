module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "loan",
    {
      loanid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      bookid: {
        type: DataTypes.INTEGER,
      },
      patronid: {
        type: DataTypes.INTEGER,
      },
      fineid: {
        type: DataTypes.INTEGER,
      },
      librarianid: {
        type: DataTypes.INTEGER,
      },
      loandate: {
        type: DataTypes.DATE,
      },
      returndate: {
        type: DataTypes.DATE,
      },
      statusid: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "loan",
      timestamps: false,
    }
  );
