// Get references to page elements
// Personal Input Variables
var socialNum = $('#socialNum').val().trim();
var firstName = $('#firstName').val().trim();
var lastName = $('#lastName').val().trim();
var streetAddress = $('#streetAddress').val().trim();
var city = $('#city').val().trim();
var state = $('#state').val().trim();
var zip = $('#zip').val().trim();
var phoneNum = $('#phoneNum').val().trim();
var birthDate = $('#birthDate').val().trim();

// Work History Input Variables
var empName = $('#empName').val().trim();
var jobAddress = $('#jobAddress').val().trim();
var workCity = $('#workCity').val().trim();
var mainStateLoc = $('#mainStateLoc').val().trim();
var workZip = $('#workZip').val().trim();
var companyPhone = $('#companyPhone').val().trim();
var firstStartDate = $('#firstStartDate').val().trim();
var lastDateWorked = $('#lastDateWorked').val().trim();
var daysWorked = $('#daysWorked').val().trim();
var statesWorked = $('#statesWorked').val().trim();
var reasonUnemployed = $('#reasonUnemployed').val().trim();

// Eligibility Input Variables
var quarterPay = $('#quarterPay').val().trim();
var baseEarnings = $('#baseEarnings').val().trim();
var ableWork = $('#ableWork').val().trim();
var jobLossFault = $('#jobLossFault').val().trim();

// Payment Input
var bankName = $('#bankName').val().trim();
var routingNumber = $('#routingNumber').val().trim();
var accountNumber = $('#accountNumber').val().trim();






// The API object contains methods for each kind of request we'll make
var API = {
    saveApplication: function(example) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/UserInfo",
            data: JSON.stringify(example)
        });
    },
    getApplication: function() {
        return $.ajax({
            url: "api/UserInfo",
            type: "GET"
        });
    },
    deleteApplication: function(id) {
        return $.ajax({
            url: "api/UserInfo/" + id,
            type: "DELETE"
        });
    }
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();

    var UserInfo = {
        socialNumber: socialNum,
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zip: zip,
        phoneNum: phoneNum,
        birthDate: birthDate,
        empName: empName,
        jobAddress: jobAddress,
        workCity: workCity,
        mainStateLoc: mainStateLoc,
        workZip: workZip,
        companyPhone: companyPhone,
        firstStartDate: firstStartDate,
        lastDateWorked: lastDateWorked,
        daysWorked: daysWorked,
        statesWorked: statesWorked,
        reasonUnemployed: reasonUnemployed,
        quarterPay: quarterPay,
        baseEarnings: baseEarnings,
        ableWork: ableWork,
        jobLossFault: jobLossFault,
        bankName: bankName,
        routingNumber: routingNumber,
        accountNumber: accountNumber
    };
    // create conditional for empty values
    if (!(example.text && example.description)) {
        alert("You must enter an example text and description!");
        return;
    }

    API.saveApplication(UserInfo).then(function() {
        // Display Modal to or redirect to results page
    });

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteApplication(idToDelete).then(function() {
        location.reload();
    });
};

// Add event listeners to the submit and delete buttons
$('#submit').on("click", handleFormSubmit);
$('#deleteApplication').on("click", ".delete", handleDeleteBtnClick);
