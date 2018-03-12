$(document).ready(function() {
     $('.login_user').click(function (event){
        var login_user = prompt("Please enter your username to proceed:");
        alert("Wellcome to Mini Project:  " + login_user);
        $('form').hide(2000);
        $('.page_wrap').show(1000);
    });
    $('form').submit(function(event){ 
        event.preventDefault();
        var color1 = $ ('.color1').val();
        $('body').css('background-color', color1);
    });
    $('.visa_dolja').click(function() {
        $('.ta-bort-mig').toggle(2000);
    });
    $('.radera').click(function() {
        $('.ta-bort-mig').remove();
});
});
