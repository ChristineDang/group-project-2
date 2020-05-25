// Script to run to verfiy the clients eligibility still working on it to get the info


function compareResults() {
    $.get("/api/UserInfo", function(data){
        var info = data[0]
        if (info.ableWork === true && info.jobLossFault === false){
            console.log('Eligible');
            $('#eligibleTitle').append('<h1> Eligible For Unemployment </h1>');
        }
        else {
            $('#eligibleTitle').append('<h1> Ineligible For Unemployment </h1>'); 
        }
    });
};

$('#results').click(function(e){
    e.preventDefault();
    compareResults();
    
});