module.exports = function(sequelize, DataTypes) {
  var PaymentInfo = sequelize.define("paymentInfo", {
    bankName : DataTypes.STRING,
    routingNumber: DataTypes.NUMBER,
    accountNumber: DataTypes.NUMBER,
    addStreet: DataTypes.STRING,
    addCity: DataTypes.STRING,
    addState:  DataTypes.STRING,
    addZip: DataTypes.NUMBER,
  });
  return PaymentInfo;
};