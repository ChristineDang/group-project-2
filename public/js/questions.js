$(document).ready(function() {
/*
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
*/
    // handleFormSubmit is called whenever we submit a new example
    // Save the new example to the db and refresh the list
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var socialNum = $('#socialNum').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var streetAddress = $('#streetAddress').val();
        var city = $('#city').val();
        var state = $('#state').val();
        var zip = $('#zip').val();
        var phoneNum = $('#phoneNum').val();
        var birthDate = $('#birthDate').val();

        // Work History Input Variables
        var empName = $('#empName').val();
        var jobAddress = $('#jobAddress').val();
        var workCity = $('#workCity').val();
        var mainStateLoc = $('#mainStateLoc').val();
        var workZip = $('#workZip').val();
        var companyPhone = $('#companyPhone').val();
        var firstStartDate = $('#firstStartDate').val();
        var lastDateWorked = $('#lastDateWorked').val();
        var daysWorked = $('#daysWorked').val();
        var statesWorked = $('#statesWorked').val();
        var reasonUnemployed = $('#reasonUnemployed').val();

        // Eligibility Input Variables
        var quarterPay = $('#quarterPay').val();
        var baseEarnings = $('#baseEarnings').val();
        var ableWork = $('#ableWork').val();
        var jobLossFault = $('#jobLossFault').val();

        // Payment Input
        var bankName = $('#bankName').val();
        var routingNumber = $('#routingNumber').val();
        var accountNumber = $('#accountNumber').val();
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
        $.post("/api/UserInfo", UserInfo, function(){
            alert("Info was saved");
        });
        /*
        API.saveApplication(UserInfo).then(function() {
        // Display Modal to or redirect to results page
        
            console.log('results saved');
            window.location.href='/eligibility'; 
        });
        */
    });
    /*
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
    $('#submit').click(handleFormSubmit);
    $('#deleteApplication').on("click", ".delete", handleDeleteBtnClick);
    */
});
