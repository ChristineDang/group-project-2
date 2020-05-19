modulle.exports = function(sequelize, data) {
    var workHist = sequelize.define("workHist", {
        empName: data.STRING,
        jobAddress: data.NUMBER.STRING,
        city: data.STRING,
        mainStateLoc: data.STRING,
        zip: data.NUMBER,
        companyPhone: data.STRING,
        firstStartDate: data.STRING,
        lastDateWorked: data.NUMBER,
        daysWorked: data.NUMBER,
        statesWorked: data.STRING,
        reasonUnemployed: data.STRING,
    }); return workHist
};