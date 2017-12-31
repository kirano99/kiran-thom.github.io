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
var colour = document.getElementById("c").value;
var canvas = document.getElementById("AlbumCanvas");
var input = document.getElementById("inputtitle").value;
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = colour;
ctx.font = "40px GothamBook";
ctx.fillText(input,10,50);

}

function CanvasColour(){
  document.getElementById("c").focus();
  document.getElementById("c").click();
  var colour = document.getElementById("c").value;
  return colour;
}
    
function ShowColour1(){
    
  document.getElementById("CC1").focus();
  document.getElementById("CC1").click();
  var colour = document.getElementById("CC1").value;
  return colour;
    
}    

function ChangeColour1(){
    
    var colour = document.getElementById("CC1").value;
    var temp = document.getElementById('#CanvasBack').childElementCount;
    console.log(temp);
    
}
