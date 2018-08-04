$(document).ready(function(){
  document.addEventListener('scroll', e => {
    var navBar = $('#navBar'); 
    console.log(navBar.offset().top);
    if (navBar.offset().top > window.innerHeight + 21 && navBar.hasClass('hidden')) {
      navBar.removeClass('hidden');
    } else if (navBar.offset().top <= window.innerHeight + 22 && !navBar.hasClass('hidden')) {
      console.log('hidden');
      navBar.addClass('hidden');
    }
  });

    $(".scroll").click(function(event){
     event.preventDefault();
     var full_url = this.href;
     var parts = full_url.split("#");
     var trgt = parts[1];
     var target_offset = $("#"+trgt).offset();
     var target_top = target_offset.top;
     $('html, body').animate({scrollTop: target_top}, 750, 'easeInSine');
    });
    $("#navBarHeading").click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 750, 'easeInSine');
    })
  });
