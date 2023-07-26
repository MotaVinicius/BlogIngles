function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    let icone = document.querySelector('.fa-solid');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
        
    } else {
        menuMobile.classList.add('open')
        icone.classList.remove('fa-bars')
        icone.classList.add('fa-xmark')
    }
    
}




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

const sliderAut = setInterval(nextSlide, 4000)


console.log('olá')