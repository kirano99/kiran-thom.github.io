window.onload = function () {
    init();
   
};

function init() {
    console.log('init fired');
    //alert("ALERT");
}
    
$(function(){
    $('#simple-menu').sidr();
    $(".navclass").fadeIn(5000).removeClass('hidden');
    $(".textlogo").fadeIn(5000).removeClass('hidden');
    console.log('animation')   
});

$(window).scroll(function() {

    if ($(this).scrollTop()>400)
     {
        $('.video-foreground').fadeOut();
     }
    else
     {
      $('.video-foreground').fadeIn();
     }
    
    
 });

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    comsole.log("worked")
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


function CanvasUpdate(){

var canvas = document.getElementById("AlbumCanvas");
var input = document.getElementById("inputtitle").value;
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#e11d22";
ctx.font = "40px GothamBook";
ctx.fillText(input,10,50);

}
