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