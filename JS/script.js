const prev = document.getElementById('prev-bt');
const next = document.getElementById('next-bt');
const slides = document.querySelectorAll('.slider')

let currentSlide = 0;

function hideSlide() {
    slides.forEach(item => item.classList.remove('on'))
}

function showSlide(){
    slides[currentSlide].classList.add('on')
}
function nextSlide(){
    hideSlide()
    if(currentSlide == slides.length - 1){
        currentSlide = 0
    } else {
     currentSlide ++
    }
    showSlide()
}
function prevSlide(){
    hideSlide()
    if(currentSlide == 0){
        currentSlide = slides.length -1;
    } else {
        currentSlide --
    }
    showSlide()
}


prev.addEventListener('click',nextSlide)
next.addEventListener('click',prevSlide)


console.log('olá')