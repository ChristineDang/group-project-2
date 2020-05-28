
// Script to run to verfiy the clients eligibility still working on it to get the info
var url = window.location.search;
var userId = url[url.length -1];

function compareResults(id) {
    $.get("/api/UserInfo/" + id, function(data){
        var info = data;
        if (info.ableWork === true && info.jobLossFault === false){
            console.log('Eligible');
            $('#eligibleTitle').append('<h1>Congratulations ' + info.firstName + '</h1> <h3>You Are Eligible For Unemployment </h3> <h4>A copy of your application has been sent to your email, for your records.<h4>');
            $.post('/email',info, function(){
                console.log('server has received data');
            });
        }
        else {
            $('#eligibleTitle').append('<h1> Ineligible For Unemployment </h1>'); 
        }
    });
}

$('#results').click(function(e){
    e.preventDefault();
    $('#eligibleTitle').empty();
    compareResults(userId);
    
});

$('#editApp').click(function(e){
    e.preventDefault();
    $('#eligibleTitle').empty();
    window.location.href='/questions?userId=' + userId;

});

$('#deleteApp').click(function(e){
    e.preventDefault();
    $.ajax({
        url: 'api/UserInfo/' + userId,
        type: 'DELETE'
    }).then(function(data){
        console.log(data + 'has been deleted');
        window.location.href='/';
    }); 
});
