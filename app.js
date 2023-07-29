
let tg = window.Telegram.WebApp;
tg.expand();

const girl1 = document.getElementById('girl1');
const girl2 = document.getElementById('girl2');
const like = document.getElementById('like');


// Add an event listener to the carousel when it slides
$('.carousel').on('slid.bs.carousel', function () {
  // Get the active slide using the "active" class
  const activeSlide = $(this).find('.carousel-item.active');
  // Get the index of the active slide
  const activeSlideIndex = $(activeSlide).index();
  
  like.addEventListener('click', sendData);
  // The function that handles the click event
  function sendData() {
    tg.sendData(activeSlideIndex.toString());
  }

  // Output the active slide index to the console or use it as needed
  console.log('Active slide ID:', activeSlideIndex);
  console.log('item is now:',activeSlideIndex);
});

