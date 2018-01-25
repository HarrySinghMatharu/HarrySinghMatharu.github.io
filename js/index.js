$(document).ready(function(){
    setBindings();
});

function setBindings() {
    $("nav a,header a").click(function(e){
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
        $("html,body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}

/*jQuery(document).ready(function($){
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
    
    // Account for home page with empty path
    if ( path == '' ) {
      path = 'index.html'#home;
    }
        
    var target = $('nav a[href="'+path+'"]');
    // Add active class to target link
    target.addClass('active');
  });
*/
