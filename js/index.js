$(document).on('click', 'a[href^="#"]', 
    function (event) {
        event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
});

});
    
    /*$('a[href^="#"]').on('click',function(e){
     e.preventDefault();
     
     var target = this.hash;
     var $target = $(target);
     //scroll
      $('html, body').animate({
       'scrollTop': $target.offset().top 
      },1000, 'swing',function () {
       window.location.hash=target;
      }); 
      
    
    });
   
   });
   */
