// Script to run to verfiy the clients eligibility still working on it to get the info


function compareResults() {
    $.ajax({
        method: "GET",
        url: "/api/UserInfo/" 
    }).then(function(response){
        console.log(response);
    });
};

$('#results').click(function(e){
    e.preventDefault();
    console.log(socalNum);
    
});