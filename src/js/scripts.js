$(document).ready(function () {
    $('#menu-icon').bind('click', function() {
     $("#aside-menu").css({
        'right':'0',
        'transition': "all .7s"
     });

    $(".section1").addClass("grey");
    $(".header").addClass("grey");
    $(".subtitle").addClass("font-color");
  
    });
});


$(document).ready(function () {
  $(".aside-link").click(function (e) {
   
    $("#aside-menu").css({
    'right':'-15%',
    'transition': "all .7s",
     });

     $(".section1").removeClass("grey");
     $(".header").removeClass("grey");
     $(".subtitle").removeClass("font-color");
     
  });
});

// smoth scrolling

$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
      
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });