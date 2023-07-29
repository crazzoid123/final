
let tg = window.Telegram.WebApp;
tg.expand();

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

// Add an event listener to the carousel when it slides
$('.carousel').on('slid.bs.carousel', function () {
  // Get the active slide using the "active" class
  const activeSlide = $(this).find('.carousel-item.active');
  // Get the index of the active slide
  const activeSlideIndex = $(activeSlide).index();
  // Output the active slide index to the console or use it as needed
  console.log('Active slide ID:', activeSlideIndex);
  console.log('item is now:',activeSlideIndex);
});

