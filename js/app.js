const container = document.getElementsByClassName('projectImage');
const img = document.getElementsByTagName('img');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const leftArrow = document.querySelector('.modal-arrow2');
const rightArrow = document.querySelector('.modal-arrow1');
const body = document.querySelector('body')
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
    } else if (newWidth >= 1024){
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
        } 
        container[0].classList.remove('hidden');
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
        })
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
})

leftArrow.addEventListener("click", e =>{
    if (index != 0) {
    index = Number.parseInt(index, 10) - 1;
    displayModal(index);
    } else {
    index = 4;    
    displayModal(5);   
    }
})

modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
    });

//Change portfolio display

window.addEventListener('resize', () => {
    vw();
});

// Scroll animation 

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);