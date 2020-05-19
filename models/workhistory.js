module.exports = function(sequelize, data) {
    var workHist = sequelize.define("workHist", {
        empName: data.STRING,
        jobAddress: data.STRING,
        city: data.STRING,
        mainStateLoc: data.STRING,
        zip: data.STRING,
        companyPhone: data.STRING,
        firstStartDate: data.STRING,
        lastDateWorked: data.STRING,
        daysWorked: data.NUMBER,
        statesWorked: data.STRING,
        reasonUnemployed: data.STRING,
    }); return workHist
};