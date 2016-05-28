$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    $('a').click(function(){
      $(this).toggleClass('active');
      return false;
    });
});