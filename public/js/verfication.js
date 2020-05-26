// Script to run to verfiy the clients eligibility still working on it to get the info
var url = window.location.search;
var userId = url[url.length -1];

function compareResults(id) {
    $.get("/api/UserInfo/" + id, function(data){
        var info = data;
        if (info.ableWork === true && info.jobLossFault === false){
            console.log('Eligible');
            $('#eligibleTitle').append('<h1>Congratulations ' + info.firstName + '</h1> <h3>You Are Eligible For Unemployment </h3>');
        }
        else {
            $('#eligibleTitle').append('<h1> Ineligible For Unemployment </h1>'); 
        }
    });
}

$('#results').click(function(e){
    e.preventDefault();
    compareResults(userId);
    
});

$('#editApp').click(function(e){
    e.preventDefault();
    $('#eligibleTitle').empty();
    window.location.href='/questions?userId=' + userId;

});