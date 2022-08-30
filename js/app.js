const container = document.getElementsByClassName('projectImage');
const img = document.getElementsByTagName('img');
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const leftArrow = document.querySelector('.modal-arrow2');
const rightArrow = document.querySelector('.modal-arrow1');
const body = document.querySelector('body')
let index = 0;

//functions

function vh () {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return vh;
}

function vw () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    return vw;
}


// Project Modal

function displayModal(index) {
    const modalHTML = container[index].innerHTML;
    body.style.overflow = "hidden"
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
    body.style.overflow("auto");
    });