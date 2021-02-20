$(".choose").click(function (e) {
  $( this ).closest(".package").siblings().children( ".package-front" ).css( "display", "flex" ),
  $( this ).closest(".package").siblings().children( ".package-back" ).css( "display", "none" ),
  $(this).parent().css({'display': 'none'})
  $(this).parent().siblings(".package-back").css({'display': 'flex'});
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}