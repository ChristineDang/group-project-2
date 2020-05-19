CREATE TABLE workHistory (
    id INT NOT NULL AUTO_INCREMENT,
    empName TEXT NOT NULL,
    jobAddress TEXT NOT NULL,
    city TEXT NOT NULL,
    mainStateLoc TEXT NOT NULL,
    zip TEXT NOT NULL,
    companyPhone TEXT NOT NULL,
    firstStartDate TEXT NOT NULL,
    lastDateWorked TEXT NOT NULL,
    daysWorked TEXT NOT NULL,
    statesWorked TEXT NOT NULL,
    reasonUnemployed TEXT NOT NULL,
    PRIMARY KEY(id)
)
