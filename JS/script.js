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
