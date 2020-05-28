$(document).ready(function() {
    var url = window.location.search;
    var userId = url[url.length -1];

    var UserInfo = {
        // socialNumber: $('#socialNum').val().trim(),
        firstName: $('#firstName').val().trim(),
        lastName: $('#lastName').val().trim(),
        streetAddress: $('#streetAddress').val().trim(),
        city: $('#city').val().trim(),
        state: $('#state').val().trim(),
        zip: $('#zip').val().trim(),
        phoneNum: $('#phoneNum').val().trim(),
        birthDate: $('#birthDate').val().trim(),
        empName: $('#empName').val().trim(),
        jobAddress: $('#jobAddress').val().trim(),
        workCity: $('#workCity').val().trim(),
        mainStateLoc: $('#mainStateLoc').val().trim(),
        workZip: $('#workZip').val().trim(),
        companyPhone: $('#companyPhone').val().trim(),
        firstStartDate: $('#firstStartDate').val().trim(),
        lastDateWorked: $('#lastDateWorked').val().trim(),
        daysWorked: $('#daysWorked').val().trim(),
        statesWorked: $('#statesWorked').val().trim(),
        reasonUnemployed: $('#reasonUnemployed').val().trim(),
        quarterPay: $('#quarterPay').val().trim(),
        baseEarnings: $('#baseEarnings').val().trim(),
        ableWork: $('#ableWork').val().trim(),
        jobLossFault: $('#jobLossFault').val().trim(),
        bankName: $('#bankName').val().trim(),
        routingNumber: $('#routingNumber').val().trim(),
        accountNumber: $('#accountNumber').val().trim()
    }; 
    if (userId) {
        console.log(UserInfo.id);
        editApp(UserInfo);
    }
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
        editApplication: function(info){
            return $.ajax({
                type: "PUT",
                url: "api/UserInfo/" + userId,
                data: info
            });
        }
    };

    // handleFormSubmit is called whenever we submit a new example
    // Save the new example to the db and refresh the list
    var handleFormSubmit = function(event) {
        event.preventDefault();
        UserInfo = {
            // socialNumber: $('#socialNum').val().trim(),
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            streetAddress: $('#streetAddress').val().trim(),
            city: $('#city').val().trim(),
            state: $('#state').val().trim(),
            zip: $('#zip').val().trim(),
            phoneNum: $('#phoneNum').val().trim(),
            birthDate: $('#birthDate').val().trim(),
            empName: $('#empName').val().trim(),
            jobAddress: $('#jobAddress').val().trim(),
            workCity: $('#workCity').val().trim(),
            mainStateLoc: $('#mainStateLoc').val().trim(),
            workZip: $('#workZip').val().trim(),
            companyPhone: $('#companyPhone').val().trim(),
            firstStartDate: $('#firstStartDate').val().trim(),
            lastDateWorked: $('#lastDateWorked').val().trim(),
            daysWorked: $('#daysWorked').val().trim(),
            statesWorked: $('#statesWorked').val().trim(),
            reasonUnemployed: $('#reasonUnemployed').val().trim(),
            quarterPay: $('#quarterPay').val().trim(),
            baseEarnings: $('#baseEarnings').val().trim(),
            ableWork: $('#ableWork').val().trim(),
            jobLossFault: $('#jobLossFault').val().trim(),
            bankName: $('#bankName').val().trim(),
            routingNumber: $('#routingNumber').val().trim(),
            accountNumber: $('#accountNumber').val().trim()
        }; 
        $('#submit').click(function(e){
            e.preventDefault();
            API.saveApplication(UserInfo).then(function(data) {
                console.log(data);
                console.log('results saved');
                window.location.href='/eligibility?userId=' + data.id; 
            });
        });

    };

    function editApp() {
        $.get('/api/UserInfo/' + userId, function(data){
            $('#socialNum').val(data.socialNumber);
            $('#firstName').val(data.firstName);
            $('#lastName').val(data.lastName);
            $('#streetAddress').val(data.streetAddress);
            $('#city').val(data.city);
            $('#state').val(data.state);
            $('#zip').val(data.zip);
            $('#phoneNum').val(data.phoneNum);
            $('#birthDate').val(data.birthDate);

            // Work History Input Variables
            $('#empName').val(data.empName);
            $('#jobAddress').val(data.jobAddress);
            $('#workCity').val(data.workCity);
            $('#mainStateLoc').val(data.mainStateLoc);
            $('#workZip').val(data.workZip);
            $('#companyPhone').val(data.companyPhone);
            $('#firstStartDate').val(data.firstStartDate);
            $('#lastDateWorked').val(data.lastDateWorked);
            $('#daysWorked').val(data.daysWorked);
            $('#statesWorked').val(data.statesWorked);
            $('#reasonUnemployed').val(data.reasonUnemployed);

            // Eligibility Input Variables
            $('#quarterPay').val(data.quarterPay);
            $('#baseEarnings').val(data.baseEarnings);
            $('#ableWork').val(data.ableWork);
            $('#jobLossFault').val(data.jobLossFault);

            // Payment Input
            $('#bankName').val(data.bankName);
            $('#routingNumber').val(data.routingNumber);
            $('#accountNumber').val(data.accountNumber);
        }).then(function(){
            $('#submit').click(function(e){
                e.preventDefault();
                API.editApplication(UserInfo).then(function(data){
                    console.log('results saved');
                    console.log(data);
                    window.location.href='/eligibility?userId=' + userId; 
                });
            });
        });
        
    }
    // Add event listeners to the submit and delete buttons
    $('#submit').click(handleFormSubmit);
});
