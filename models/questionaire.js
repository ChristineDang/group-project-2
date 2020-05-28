module.exports = function (sequelize, DataTypes) {
    var UserInfo = sequelize.define('UserInfo', {
        // User Info
        email: DataTypes.STRING,
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
        workZip: DataTypes.STRING,
        companyPhone: DataTypes.STRING,
        firstStartDate: DataTypes.STRING,
        lastDateWorked: DataTypes.STRING,
        daysWorked: DataTypes.STRING,
        statesWorked: DataTypes.STRING,
        reasonUnemployed: DataTypes.STRING,
        // Eligibility Info
        quarterPay: DataTypes.STRING,
        baseEarnings: DataTypes.STRING,
        ableWork: DataTypes.BOOLEAN,
        jobLossFault: DataTypes.BOOLEAN,
    
        // Payment info
        bankName : DataTypes.STRING,
        routingNumber: DataTypes.STRING,
        accountNumber: DataTypes.STRING
    });
    return UserInfo;
};