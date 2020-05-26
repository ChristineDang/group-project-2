$('#createAccount').click(function(event){
    event.preventDefault();
    $('#createModal').modal('show');
});

$('#signIn').click(function(event){
    event.preventDefault();
    window.location.href='/questions'; 
});