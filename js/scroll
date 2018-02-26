$(document).ready(function(){
  setBindings();
});

function setBindings() {
  $("nav a,header a ").click(function(e){
      e.preventDefault();
      var sectionID = e.currentTarget.id + "Section";
      
      $("html,body").animate({
          scrollTop: $("#" + sectionID).offset().top
      }, 1000)
  })
}

/*$(".hamburger").click(function() {
  $(this).toggleClass("is-active");
  $(".mobile-menu").toggle();

});*/
