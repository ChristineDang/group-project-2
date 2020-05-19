module.exports = function (sequelize, DataTypes) {
    var UserInfo = sequelize.define('UserInfo', {
        // User Info
        socialNumber: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        phoneNum: DataTypes.STRING,
        birthDate: DataTypes.STRING,
        // Work History
        empName: DataTypes.STRING,
        jobAddress: DataTypes.STRING,
        workCity: DataTypes.STRING,
        mainStateLoc: DataTypes.STRING,
        workZip: DataTypes.NUMBER,
        companyPhone: DataTypes.STRING,
        firstStartDate: DataTypes.STRING,
        lastDateWorked: DataTypes.NUMBER,
        daysWorked: DataTypes.NUMBER,
        statesWorked: DataTypes.STRING,
        reasonUnemployed: DataTypes.STRING,
        // Eligibility Info
        quarterPay: DataTypes.BOOLEAN,
        baseEarnings: DataTypes.BOOLEAN,
        ableWork: DataTypes.BOOLEAN,
        jobLossFault: DataTypes.BOOLEAN,
    
        // Payment info
        bankName : DataTypes.STRING,
        routingNumber: DataTypes.NUMBER,
        accountNumber: DataTypes.NUMBER
    });
    return UserInfo;
};