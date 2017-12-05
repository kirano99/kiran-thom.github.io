window.onload = function () {
    init();
   
};

function init() {
    console.log('init fired');
    //alert("ALERT");
}
    
$(function(){
    $(".button").fadeIn(5000).removeClass('hidden');
    $(".textlogo").fadeIn(5000).removeClass('hidden');
    console.log('animation')
});

$(window).scroll(function() {

    if ($(this).scrollTop()>700)
     {
        $('.video-foreground').fadeOut();
     }
    else
     {
      $('.video-foreground').fadeIn();
     }
 });


