const container = document.getElementsByClassName('projectImage');
const img = document.getElementsByTagName('img');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const leftArrow = document.querySelector('.modal-arrow2');
const rightArrow = document.querySelector('.modal-arrow1');
const body = document.querySelector('body');
let index = 0;
const sticky = document.querySelector('.sticky-top');
const p = document.querySelector('#update-text');
vw();

//functions

function vw () {
    var newWidth = window.innerWidth;
    if(newWidth >= 628 && newWidth <= 1024) {
        for (i=0; i< container.length; i++) {
            container[i].classList.remove("hidden");
            container[i].classList.add('col-6');
            container[i].classList.remove('col-4');
            p.textContent = 'Click image to make larger';
            
        }
    } else if (newWidth >= 1023){
        for (i=0; i< container.length; i++) {
            container[i].classList.remove("hidden");
            container[i].classList.add('col-4');
            container[i].classList.remove('col-6');
            p.textContent = 'Click image to make larger';
        }  
    } else if (newWidth < 628) {
        for (i=0; i< container.length; i++) {
            container[i].classList.add("hidden");
            container[i].classList.remove('col-4');
            container[i].classList.remove('col-6');
            p.textContent = 'Click image to view more projects';
        } container[0].classList.remove('hidden');
      
    }
}


// Project Modal

function displayModal(index) {
    const modalHTML = container[index].innerHTML;
    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;
    return modalContainer;
    }


for (i=0; i< container.length; i++) {
    let index = i;
    container[i].addEventListener ('click', (e) => {
        displayModal(index);
        });
}
//Arrow through Modal

rightArrow.addEventListener("click", e =>{
    if (index != 4) {
    index = Number.parseInt(index, 10) + 1;
    displayModal(index);
    } else {
    index = 0;    
    displayModal(0);   
    }
});

leftArrow.addEventListener("click", e =>{
    if (index != 0) {
    index = Number.parseInt(index, 10) - 1;
    displayModal(index);
    } else {
    index = 4;    
    displayModal(5);   
    }
});

modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
    });

//Change portfolio display

window.addEventListener('resize', () => {
    vw();
});

// Scroll animation 

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
  vw();
  // setTimeout(scrolled(), 2000);
});

// body.addEventListener('scroll', (e)=> {

// });
// function scrolled () {
//   const about = document.getElementById('about-container');
//   const home = document.getElementById('home');
//   const portfolio = document.getElementById('portfolio');
//   const scrolledY = window.scrollY;
  
//   if(scrolledY >0 || scrolledY <= 802){
//     home.scrollIntoView({behavior: "auto", block: "start"});
//     console.log(scrolledY); 
//   } else if (scrolledY >=803 || scrolledY <= 1689){
//     about.scrollIntoView(alignToTop);
//   } else if (scrolledY >=1690 || scrolledY <= 2484){
//     portfolio.scrollIntoView(alignToTop);
//   }

// }

// body.addEventListener('scroll', (e)=> {
//   var about = document.getElementById('about-container');
//   var home = document.getElementById('home');
//   var portfolio = document.getElementById('portfolio');
//   var scrolledY = window.scrollY;
//   console.log("it has been scrolled");
//   if(scrolledY >0 || scrolledY <= 802){
//     home.scrollIntoView(true);
    
//   } else if (scrolledY >=803 || scrolledY <= 1689){
//     about.scrollIntoView(true);
//   } else if (scrolledY >=1690 || scrolledY <= 2484){
//     portfolio.scrollIntoView(true);
//   }
//   if(scrolledY){
//     window.scroll(0, scrolledY - yourHeight);
//   }

// });

