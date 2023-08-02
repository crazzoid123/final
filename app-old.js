
let tg = window.Telegram.WebApp;
tg.expand();


const like = document.getElementById('like');
const carousel = document.getElementById('carouselExampleControls');
carousel.addEventListener('slid.bs.carousel', getActiveSlideId);




function getActiveSlideId() {
    let activeSlide = document.querySelector('.carousel-item.active');
    let activeSlideId = activeSlide.id;
    return activeSlideId.toString();
}

like.addEventListener('click', showLog);

    function showLog() {
        tg.sendData(getActiveSlideId());
    }



