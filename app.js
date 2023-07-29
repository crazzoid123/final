let tg = window.Telegram.WebApp;

tg.expand();

let encodedString = tg.initData;
document.write(encodedString);

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
btn1.addEventListener("click", function() {
    // Your desired action when the image is clicked goes here
    // For example, you can open a link or perform any other action:
    tg.sendData('1');
});
btn2.addEventListener("click", function() {
    // Your desired action when the image is clicked goes here
    // For example, you can open a link or perform any other action:
    tg.sendData('2');
});
btn3.addEventListener("click", function() {
    // Your desired action when the image is clicked goes here
    // For example, you can open a link or perform any other action:
    tg.sendData('3');
});
tg.MainButton.setText('Like');
tg.MainButton.show();
// Add an event listener to the carousel when it slides
$('.carousel').on('slid.bs.carousel', function () {
  // Get the active slide using the "active" class
  const activeSlide = $(this).find('.carousel-item.active');
  // Get the index of the active slide
  const activeSlideIndex = $(activeSlide).index();
  // Output the active slide index to the console or use it as needed
  Telegram.WebApp.onEvent('mainButtonClicked', function() {
  tg.sendData(activeSlideIndex.toString());
  });

  console.log('Active slide ID:', activeSlideIndex);
  console.log('item is now:',activeSlideIndex);
});

