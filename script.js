var clickedele='';

$('.circle').on('click',function(){
    $(this).css('color','white').siblings().css('color','hsl(216, 12%, 54%)');
    $(this).css('backgroundColor','hsl(217, 12%, 63%)').siblings('').css('background','rgb(41,48,61)');
    clickedele=$(this).attr("id");
    $("#result").text("You selected "+ clickedele+ " out of 5"); 
  }); 
var b=false;
$('.circle').mouseenter(function(){
  if($(this).css('backgroundColor')!='rgb(149, 158, 172)')
      {$(this).css('color','white');
      $(this).css('background','rgb(251,116,19)');}
  else{
    $(this).css('color','white');
    $(this).css('background','rgb(251,116,19)'); 
    b=true;   
  }    
    });

$('.circle').mouseleave(function(){
  if($(this).css('backgroundColor')!='rgb(149, 158, 172)'){
  $(this).css('color',"hsl(216, 12%, 54%)");
  $(this).css('backgroundColor',"rgb(41,48,61)");
}
if(b==true){     
  $(this).css('color','white');
  $(this).css('backgroundColor','hsl(217, 12%, 63%)');
  b=false;
} 
});

  $(document).ready(function(){ 
  $('.btn').click(function(){
    if(clickedele!=''){
      $("#main-page").fadeOut();
      $("#main-page").css({
        display:"none"
      });
    $('#thankyou').fadeIn(); 
    
  }
});
});
