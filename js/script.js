// counterUp jequery Plugin
$(function()
{

  AOS.init();
  
  $(window).scroll(function()
{
let scrolling = $(this).scrollTop();

if(scrolling>50)
{
  $('.navbar').addClass('scrolled_nav_three');
}
else
{
  $('.navbar').removeClass('scrolled_nav_three');
}
});
  
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(document).ready(function () {
        new VenoBox({
            selector: '.my-video-links',
        });
    });

   
    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane',
    });


    

    



    $('.slide-content').slick({
      dots: true,
      arrows: true,
    prevArrow: '<button type="button" class="slick-prev custom-prev"> <i class="fa-solid fa-circle-arrow-left"> </i></button>',
    nextArrow: '<button type="button" class="slick-next custom-next"> <i class="fa-solid fa-circle-arrow-right" ></i></button>',

      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.review_slider').slick({
      dots: true,
      arrows: true,
    prevArrow: '<button type="button" class="slick-prev custom-prev"> <i class="fa-solid fa-circle-arrow-left"> </i></button>',
    nextArrow: '<button type="button" class="slick-next custom-next"> <i class="fa-solid fa-circle-arrow-right" ></i></button>',

      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });



    window.onload = function() {
      const elements = document.querySelectorAll('.myElement');
      elements.forEach(function(element) {
          element.classList.add('show'); // Adds the 'show' class to trigger fade-in on page load
      });
  };
  
  
  

  // For Team Part 
    
  $(document).ready(function() {
    // Toggle for the first card
    $('.toggleButtonOne').click(function() {
        const $slideContent = $('.slideContentOne');
        const $plusIcon = $(this).find('.plusIcon');
        const $closeIcon = $(this).find('.closeIcon');

        if ($slideContent.hasClass('hidden')) {
            $slideContent.stop(true, true).slideDown(300).removeClass('hidden');
            $plusIcon.addClass('hidden');
            $closeIcon.removeClass('hidden');
        } else {
            $slideContent.stop(true, true).slideUp(300).addClass('hidden');
            $plusIcon.removeClass('hidden');
            $closeIcon.addClass('hidden');
        }
    });

    // Toggle for the second card
    $('.toggleButtonTwo').click(function() {
        const $slideContent = $('.slideContentTwo');
        const $plusIcon = $(this).find('.plusIcon');
        const $closeIcon = $(this).find('.closeIcon');

        if ($slideContent.hasClass('hidden')) {
            $slideContent.stop(true, true).slideDown(300).removeClass('hidden');
            $plusIcon.addClass('hidden');
            $closeIcon.removeClass('hidden');
        } else {
            $slideContent.stop(true, true).slideUp(300).addClass('hidden');
            $plusIcon.removeClass('hidden');
            $closeIcon.addClass('hidden');
        }
    });

    // Toggle for the third card
    $('.toggleButtonThree').click(function() {
        const $slideContent = $('.slideContentThree');
        const $plusIcon = $(this).find('.plusIcon');
        const $closeIcon = $(this).find('.closeIcon');

        if ($slideContent.hasClass('hidden')) {
            $slideContent.stop(true, true).slideDown(300).removeClass('hidden');
            $plusIcon.addClass('hidden');
            $closeIcon.removeClass('hidden');
        } else {
            $slideContent.stop(true, true).slideUp(300).addClass('hidden');
            $plusIcon.removeClass('hidden');
            $closeIcon.addClass('hidden');
        }
    });

    // Toggle for the fourth card
    $('.toggleButtonFour').click(function() {
        const $slideContent = $('.slideContentFour');
        const $plusIcon = $(this).find('.plusIcon');
        const $closeIcon = $(this).find('.closeIcon');

        if ($slideContent.hasClass('hidden')) {
            $slideContent.stop(true, true).slideDown(300).removeClass('hidden');
            $plusIcon.addClass('hidden');
            $closeIcon.removeClass('hidden');
        } else {
            $slideContent.stop(true, true).slideUp(300).addClass('hidden');
            $plusIcon.removeClass('hidden');
            $closeIcon.addClass('hidden');
        }
    });

    // Repeat for other cards if needed
});

 
$(document).ready(function () {
  $('#accordionExample').on('show.bs.collapse', '.accordion-collapse', function () {
    const $accordionButton = $(this).prev('.accordion-header').find('.accordion-button');
    
    // Add active class and adjust icons
    $accordionButton.addClass('active');
    $accordionButton.find('.icon-plus').addClass('d-none');
    $accordionButton.find('.icon-xmark').removeClass('d-none');
  });

  $('#accordionExample').on('hide.bs.collapse', '.accordion-collapse', function () {
    const $accordionButton = $(this).prev('.accordion-header').find('.accordion-button');
    
    // Remove active class and adjust icons
    $accordionButton.removeClass('active');
    $accordionButton.find('.icon-xmark').addClass('d-none');
    $accordionButton.find('.icon-plus').removeClass('d-none');
  });
});



  // JS For Home Three Started

  let scene = document.getElementById('scene');
  let parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });

// Initialize ProgressBar for progress-bar1
let bar1 = new ProgressBar.Circle('#progress-bar1', {
  color: '#7968EF', // Progress bar color
  strokeWidth: 5,   // Thickness of the progress bar
  trailWidth: 5,    // Thickness of the background trail
  trailColor: '#E4F0FF', // Background color of the circle
  duration: 2000,   // Animation duration
  easing: 'easeInOut',
  from: { color: '#f00', width: 1 },
  to: { color: '#0f0', width: 10 },
  // Set the progress text to update
  step: function(state, circle) {
    let value = Math.round(circle.value() * 100);
    circle.setText(value + '%');
  }
});

bar1.animate(0.12); // Animate to 75%

// Initialize ProgressBar for progress-bar2
let bar2 = new ProgressBar.Circle('#progress-bar2', {
  color: '#F8A64C',
  strokeWidth: 5,
  trailWidth: 5,
  trailColor: '#E4F0FF', // Background color of the circle
  duration: 2000,
  easing: 'easeInOut',
  from: { color: '#f00', width: 1 },
  to: { color: '#0f0', width: 10 },
  step: function(state, circle) {
    let value = Math.round(circle.value() * 100);
    circle.setText(value + '%');
  }
});

bar2.animate(0.14); // Animate to 85%

// Initialize ProgressBar for progress-bar3
let bar3 = new ProgressBar.Circle('#progress-bar3', {
  color: '#63DE9D',
  strokeWidth: 5,
  trailWidth: 5,
  trailColor: '#E4F0FF', // Background color of the circle
  duration: 2000,
  easing: 'easeInOut',
  from: { color: '#f00', width: 1 },
  to: { color: '#0f0', width: 10 },
  step: function(state, circle) {
    let value = Math.round(circle.value() * 100);
    circle.setText(value + '%');
  }
});

bar3.animate(0.11); // Animate to 95%





  // JS For Home Three Ended
  



})






