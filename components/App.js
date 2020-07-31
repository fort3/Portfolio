///////////////////////////////
// Set the initial page
///////////////////////////////

$('#index').show('');
$('#portfolio').hide('');
$('#contact').hide('');
$('#social').hide('');
$('#book').hide('');

///////////////////////////////////
/// Make the Nav menu active according to section
//////////////////////////////////

$(function(){
    $('.nav li').click(function(event){
        var $this = $(this);
        $('.nav li').removeClass('active');
       // $this.removeClass('active');
        $($this).addClass('active');
    });

    $('#index_nav').click(function(event){
        $('.nav li').removeClass('active');
    })
});

/////////////////////////////
/// Toggling navigation bar
////////////////////////////

$('#index_nav').click(function(){
    $('#index').show('');
    $('#portfolio').hide('');
    $('#contact').hide('');
    $('#book').hide('');
    $('#social').hide('');
});

$('#portfolio_nav').click(function(){
    $('#index').hide('');
    $('#portfolio').show('');
    $('#contact').hide('');
    $('#book').hide('');
    $('#social').hide('');
});

$('#contact_nav').click(function(){
    $('#index').hide('');
    $('#portfolio').hide('');
    $('#contact').show('');
    $('#book').hide('');
    $('#social').hide('');
});

$('#social_nav').click(function(){
    $('#index').hide('');
    $('#portfolio').hide('');
    $('#contact').hide('');
    $('#book').hide('');
    $('#social').show('');
});

/////////////////
///// Get in touch button and close function
//////////////////////

$('#book_btn').click(function(){
    $('#book').fadeIn(500);
    $('#index,nav').fadeTo(500,0.5);
    $('#index').show('');
    $('#portfolio').hide('');
    $('#contact').hide('');
    $('#social').hide(''); 
});

$('#close').click(function(){
    $('#book').fadeOut(500);
    $('#index,nav').fadeTo(500, 1);
    $('#index').show('');
    $('#portfolio').hide('');
    $('#contact').hide('');
    $('#social').hide('');
});

////////////////
/// send request button
////////////////

$(function(){
    $("send_email").click(function(){

        function isEmptyString(str) {
            return !str || str.trim().length === 0;
        }

        let cusName = $('input#cus_name').val(); //get value of this input field
        let error = false;

        if(isEmptyString(cusName)) { 
            $('#err-form').show(500);
            $('#err-form').delay(4000);
            $('#err-form').animate({
                height: 'toggle'
            }, 500, function(){
                //animate completed.
            });
            error = true; //change error state
        }

        const emailRegex = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
        let cusEmail = $('input#cus_email').val() //get value of email input
        if(isEmptyString(cusEmail) || !emailRegex.test(cusEmail)) {
            $('#err-form').show(500);
            $('#err-form').delay(4000);
            $('#err-form').animate({
                height: 'toggle'
            }, 500, function(){

            });
            error = true; //change state of error
        }

        let cusPhone = $('input#cus_phone').val(); // get the value of the input field
        if (isEmptyString(cusPhone)) {
            $('#err-form').show(500);
            $('#err-form').delay(4000);
            $('#err-form').animate({
                height: 'toggle'
            }, 500, function () {
                // Animation complete.
            });
            error = true; // change the error state to true
        }

        let cusMessage = $('textarea#cus_statement').val(); // collect value input field
        if (isEmptyString(cusMessage)) {
            $('#err-form').show(500);
            $('#err-form').delay(4000);
            $('#err-form').animate({
                height: 'toggle'
            }, 500, function () {
                // Animation complete.
            });
            error = true; // change the error state to true
        }


        if(error == false){
            let dataString = $('#request_form').serialize(); //collect form data

            $.ajax({
                type: "POST",
                url: $('#request_form').attr('action'),
                data: dataString,
                timeout: 6000,
                error: function (request, error){
                    $('#errorSend').show();
                },
                success: function(){
                    alert('Success! Thank You for you reservation. We will send you a confirmation email soon');
                }
            });
            return false;
        }

        return false; // stops user browser being directed to the php file
    });
});