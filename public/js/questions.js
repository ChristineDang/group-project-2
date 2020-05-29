$(document).ready(function() {
    var url = window.location.search;
    var userId = url[url.length -1];
    var isValid = false;
    var UserInfo;
    console.log(url);
    console.log(userId);
    console.log(isValid);
    $('#submit').show();
    $('#submitEdit').hide();
    if (userId !== undefined) {
        console.log('pulling data');
        editApp();
    }
    function user(){
        console.log('newApp');
        handleFormSubmit();

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
    var handleFormSubmit = function() {
        if(!isValid){
            check();
        }
        UserInfo = {
            email: $('#email').val().trim(),
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

        API.saveApplication(UserInfo).then(function(data) {

            console.log(data);
            console.log('results saved');
            window.location.href='/eligibility?userId=' + data.id; 
        });
        
    };

    function editApp() {
        $('#submit').hide();
        $('#submitEdit').show();
        $.get('/api/UserInfo/' + userId, function(data){
            $('#email').val(data.email);
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
            $('#reasonUnemployed').val(data.reasonUnemployed);
            $('#daysWorked').val(data.daysWorked);
            $('#statesWorked').val(data.statesWorked);
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
            $('#submitEdit').click(function(e){
                e.preventDefault();
                if(!isValid){
                    secondCheck();
                }else{
                    API.editApplication(UserInfo).then(function(data){
                        console.log('results saved');
                        console.log(data);
                        window.location.href='/eligibility?userId=' + userId; 
                    });
                }

            });
        });
        
    }
    function check(){
        if ($('#socialNum').val() === "" || 
            $('#firstName').val() === "" || 
            $('#lastName').val() === "" || 
            $('#streetAddress').val() === "" ||
            $('#city').val() === "" || 
            $('#state').val() === "" ||
            $('#zip').val() === "" || 
            $('#phoneNum').val() === "" ||
            $('#birthDate').val() === "" || 
            $('#empName').val() === "" ||
            $('#jobAddress').val() === "" || 
            $('#workCity').val() === "" ||
            $('#mainStateLoc').val() === "" || 
            $('#workZip').val() === "" ||
            $('#companyPhone').val() === "" || 
            $('#firstStartDate').val() === "" ||
            $('#lastDateWorked').val() === "" || 
            $('#daysWorked').val() === "" || 
            $('#statesWorked').val() === "" ||
            $('#reasonUnemployed').val() === "" || 
            $('#quarterPay').val() === "" ||
            $('#baseEarning').val() === "" || 
            $('#ableWork').val() === "null" ||
            $('#jobLossFault').val() === "null" || 
            $('#bankName').val() === "" ||
            $('#routingNumber').val() === "" || 
            $('#accountNumber').val() === ""){
            $('#\\#myModal').modal('show'); 
            handleFormSubmit();
        } else {
            isValid = true;
        }
    }

    function secondCheck(){

        if ($('#socialNum').val() === "" || 
            $('#firstName').val() === "" || 
            $('#lastName').val() === "" || 
            $('#streetAddress').val() === "" ||
            $('#city').val() === "" || 
            $('#state').val() === "" ||
            $('#zip').val() === "" || 
            $('#phoneNum').val() === "" ||
            $('#birthDate').val() === "" || 
            $('#empName').val() === "" ||
            $('#jobAddress').val() === "" || 
            $('#workCity').val() === "" ||
            $('#mainStateLoc').val() === "" || 
            $('#workZip').val() === "" ||
            $('#companyPhone').val() === "" || 
            $('#firstStartDate').val() === "" ||
            $('#lastDateWorked').val() === "" || 
            $('#daysWorked').val() === "" || 
            $('#statesWorked').val() === "" ||
            $('#reasonUnemployed').val() === "" || 
            $('#quarterPay').val() === "" ||
            $('#baseEarning').val() === "" || 
            $('#ableWork').val() === null ||
            $('#jobLossFault').val() === null || 
            $('#bankName').val() === "" ||
            $('#routingNumber').val() === "" || 
            $('#accountNumber').val() === ""){
            $('#\\#myModal').modal('show'); 
            console.log($('#ableWork').val());
            return false;
        } else {
            console.log('works');
            UserInfo = {
                email: $('#email').val().trim(),
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
            isValid = true;
            API.editApplication(UserInfo).then(function(data){
                console.log('results saved');
                console.log(data);
                window.location.href='/eligibility?userId=' + userId; 
            });
            
        }
    }
    $('#submit').click(user);

});

