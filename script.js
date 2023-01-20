// бургер меню

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el){

    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');

    })
})

// поиск

let search = document.querySelector('.header__search');
let form = document.querySelector('.header__form');
let btn = document.querySelector('.header__btn');

search.addEventListener('click',

function() {
    form.classList.toggle('header__form--active');
    document.body.classList.toggle('stop-scroll');

})

btn.addEventListener('click', 

function(){

        form.classList.remove('header__form--active');
        document.body.classList.remove('stop-scroll');

})


// табы (смена элемента при нажатии на кнопку)

let tabsBtn = document.querySelectorAll('.work__slide-link');
let tabsItem = document.querySelectorAll('.work__text');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){  btn.classList.remove('work__slide-link--active')});
        e.currentTarget.classList.add('work__slide-link--active');

        tabsItem.forEach(function(element){ element.classList.remove('work__text--active')});
        document.querySelector(`[data-target=${path}]`).classList.add('work__text--active');
    })
})

// слайдер в секции hero 


const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }

  });

//   accordion 

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active',
    
});


// const accordion = document.getElementsByClassName('accordion');
// const acImg = document.getElementsByClassName('question__img')

// for (i=0; i<accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('accordion--active');
    
//   })
// }



  




