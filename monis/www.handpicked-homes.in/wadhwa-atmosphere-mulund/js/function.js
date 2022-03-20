$(document).ready(function(){
    $(".closepop").click(function(){
        $(".popupcontainer").css({'display':'none'});
    });

    setTimeout(function() {
        $(".popupcontainer").css({'display':'flex'});
   }, 8000);
});