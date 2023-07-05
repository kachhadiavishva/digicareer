$(document).ready(function () { 
  if ($('.top-section-slider').length) {
    $('.top-section-slider').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 300,
      prevArrow: '<img src="assets/left-arrow-blue.png" class="prev">',
      nextArrow: '<img src="assets/right-arrow-blue.png" class="next">',
    });
  }

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

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  arrow:true,
  prevArrow: '<img src="assets/left-arrow-border.png" class="prev">',
  nextArrow: '<img src="assets/right-arrow-border.png" class="next">',
});

setInterval(() => {
  $('.slider-nav').slick('refresh');
  $('.slider-for').slick('refresh');
}, 2000);

setTimeout(() => {
   $('.top-section-slider').slick('refresh')
}, 2000);

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


$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('.text-sidebar').toggleClass('active');
      $('.sidebar-header').toggleClass('sidebar-header-active');
  });
});

$(document).ready(()=>{
  $('#file-input').change(function(){
    const file = this.files[0];
    console.log(file);
    if (file){
      let reader = new FileReader();
      reader.onload = function(event){
        console.log(event.target.result);
        $('#imgPreview').attr('src', event.target.result);
      }
      reader.readAsDataURL(file);
    }
  });
});

$(document).ready(function () { 
 
var paused = false;
  $(window).scroll(function(){
    if ($('.dc-team-section').length) {
      if( $(window).scrollTop() > ($(".dc-team-section").offset().top-500) ) {
          if( !paused ){
            $('.dc-team-slick').slick('refresh');
              paused = true;
          }        
      }
    }
  });
});

//move header in small device

$(document).ready(function(){
    var w = $(window).width();
      if(w > 991) {
         $("#lastHeader").appendTo($("#movetobottom"));
      }
      else {
          $("#lastHeader").appendTo($("#movetotop"));
      }
 });

 $(window).resize(function(){
         var w = $(window).width();
         if(w > 991) {
            $("#lastHeader").appendTo($("#movetobottom"));
         }
         else {
             $("#lastHeader").appendTo($("#movetotop"));
         }
     });

///
if ($('#container-1').length) {
Highcharts.chart('container-1', {

  chart: {
      type: 'solidgauge',
      height: '110%',
      events: {
          //render: renderIcons
      }
  },

  title: {
      text: '',
      style: {
          fontSize: '24px'
      }
  },

  tooltip: {
    enabled: false
      /*borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
          fontSize: '16px'
      },
      valueSuffix: '%',
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
          return {
              x: (this.chart.chartWidth - labelWidth) / 2,
              y: (this.chart.plotHeight / 2) + 15
          };
      }*/
  },

  pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          // backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
          //     .setOpacity(0.3)
          //     .get(),
          backgroundColor:'#98C220',
          borderWidth: 0
      }]
  },

  yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
  },

  plotOptions: {
      solidgauge: {
          dataLabels: {
              enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
      }
  },

  series: [{
      name: 'Progress',
      data: [{
          color: '#48B1E8',
          radius: '112%',
          innerRadius: '88%',
          y: 70
      }]
  }]
});
}

// Build the chart
if ($('#container-2').length) {
Highcharts.chart('container-2', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: '',
      align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Branding Mastery',
          y: 65,
          sliced: true,
          selected: true,
          color:'#FFA726',
      },  {
          name: 'Traffic Mastery',
          y: 10,
          color:'#F06292',
      },  {
          name: 'Influence Mastery',
          y: 25,
          color:'#26C6DA',
      }]
  }]
});

}


//quantity minus plus
$(document).on('click','.plus-cart-count',function(){
  var currentQuantity = $('.hidden-plus-minus').val();
  currentQuantity ++;
  $('.hidden-plus-minus').val(currentQuantity);
  $('.show-quantity').html(currentQuantity);

});
$(document).on('click','.minus-cart-count',function(){
  var currentQuantity = $('.hidden-plus-minus').val();
  if(currentQuantity>1){
    currentQuantity --;
    $('.hidden-plus-minus').val(currentQuantity);
    $('.show-quantity').html(currentQuantity);
  }
});

$(document).on('click','.fav-product',function(){
   $(this).attr('src','assets/fill-heart.png')
   $(this).removeClass().addClass('unfav-product');
});
$(document).on('click','.unfav-product',function(){
  $(this).attr('src','assets/heart.png')
  $(this).removeClass().addClass('fav-product');
});


