$(document).ready(function () { 
if ($('.dc-team-slick').length) {
  $('.dc-team-slick').slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
        }
      }
    ]
  });
}

if ($('.dc-our-media-slick').length) {
  $('.dc-our-media-slick').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    prevArrow: '<img src="assets/left-arrow-blue.png" class="prev">',
    nextArrow: '<img src="assets/right-arrow-blue.png" class="next">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
          arrows: true,
        }
      }
    ]
  });
}

if ($('.hear-from-alumni-slider').length) {
  $('.hear-from-alumni-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    prevArrow: '<img src="assets/left-arrow-border.png" class="prev">',
    nextArrow: '<img src="assets/right-arrow-border.png" class="next">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
          arrows: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 300,
          arrows: true,
        }
      }
    ]
  });
}

if ($('.dc-our-partner-slick').length) {
  $('.dc-our-partner-slick').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnHover: false,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnHover: false,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnHover: false,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnHover: false,
          cssEase: 'linear',
        }
      }
    ]
  });
}


 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');
    
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
  
  
    return false;
  });
 

  
});

$(function () {
  $('.genealogy-tree ul').hide();
  $('.genealogy-tree>ul').show();
  $('.genealogy-tree ul.active').show();
  $('.genealogy-tree li').on('click', function (e) {
      var children = $(this).find('> ul');
      if (children.is(":visible")) children.hide('fast').removeClass('active');
      else children.show('fast').addClass('active');
      e.stopPropagation();
  });
});

$(document).on('click','.tab-click-vertical',function(){
  $('.tab-click-vertical').removeClass('active');
  $(this).addClass('active');
});
$(document).on('click','.tab-click-horzontal',function(){
  $('.tab-click-horzontal').removeClass('active');
  $('.dc-white-icon').addClass('d-none');
  $('.dc-orange-icon').removeClass('d-none');
  $(this).addClass('active');
  $(this).find('.dc-white-icon').removeClass('d-none');
  $(this).find('.dc-orange-icon').addClass('d-none');
});

$(document).on('click','.Package-dc-outer',function(){
$('.Package-dc-outer').removeClass('active-package');
$(this).addClass('active-package');
$('.choosen-package').addClass('d-none');
$(this).find('.choosen-package').removeClass('d-none');
})

function playVideo() {
   $('#playvideo').trigger('play');
   $("#changefunction").attr("onclick", "return pauseVideo();");
}
function pauseVideo() {
  $('#playvideo').trigger('pause');
  $("#changefunction").attr("onclick", "return playVideo();");
}


//show more jquery

$ShowHideMore = $('.post_wrap');
$ShowHideMore.each(function() {
    var $times = $(this).children('.pst');
    if ($times.length > 6) {
        $ShowHideMore.children(':nth-of-type(n+6)').addClass('moreShown').hide();
        $(this).find('span.message').addClass('more-times').attr('src','assets/down-blue-arrow.png');
    }
});

$(document).on('click', '.show-more', function() {
  var that = $(this);
  var thisParent = that.closest('.post_wrap');
  if (that.hasClass('more-times')) {
    thisParent.find('.moreShown').show();
    that.toggleClass('more-times', 'less-times').attr('src','assets/dropdown-up-blue.png');
  } else {
    thisParent.find('.moreShown').hide();
    that.toggleClass('more-times', 'less-times').attr('src','assets/down-blue-arrow.png');
  }  
});
