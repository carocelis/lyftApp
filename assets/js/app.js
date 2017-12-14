$(document).ready(function(){

  $('.home').hide();
  $('.sign-up').hide();
  $('.verify').hide();
//Vista splash

	setTimeout(function(){ 
		 $('#splash').fadeOut(500);
     $('.home').show();
		}, 4000);

//Botón sign up
  $('.button2').click(function(){
    $('.home').hide();
    $('.sign-up').show();
  });

//Volver a home
  $('.back1').click(function(){
    $('.sign-up').hide();
    $('.home').show();
  });

//Input banderas
  $("#demo").intlTelInput();

//Habilitar/Deshabilitar botón next
  $('button[type="button"]').attr('disabled','disabled');
  $('input[type="tel"]').keypress(function(){
    if($(this).val().length === 9){
      $('button[type="button"]').removeAttr('disabled');
      $('button[type="button"]').css({'background-color': '#E90B8B'});           
    };  
  });

//Botón next siguiente sección y alerta
  $('.next').click(function(){
    $('.sign-up').hide();
    $('.verify').show();
      
    var code = "";
    var str = "0123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código es: LAB-" + code);
  });
//Volver a sign up
  $('.back2').click(function(){
    $('.verify').hide();
    $('.sign-up').show();
  });
});