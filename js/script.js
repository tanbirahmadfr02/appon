$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:false,
    autoplaySpeed:2000,
  });
  new VenoBox({
    selector: '.venobox'
  });
  // =========ss part start ==========
  $('.ss_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:false,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // =========ss part end ==========
  // feedback part start ======
  $('.feedback_text_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.feedback_img_slider',
    fade: true,
  });
  $('.feedback_img_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerMode:true,
    centerPadding:0,
    asNavFor: '.feedback_text_slider',
    pauseOnFocus:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
  // feedback part end=====
  // =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll",function(){
main_menu.classList.toggle("sticky",window.scrollY > 100);
})
// =========sticky menu part ========
  // ========back to top part ======
$(window).scroll(function(){
  if($(this).scrollTop() > 200){
    $(".back_to_top").addClass("bottom_to_top")
  }else{
    $(".back_to_top").removeClass("bottom_to_top")
  }
});
// ========back to top part ======