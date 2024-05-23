let btnDown = document.getElementById('buttonDown');
let btnUp = document.getElementById('buttonUp');
let downbutton = document.getElementById('downButton');
let upButton = document.getElementById('upButton');
let description = document.querySelector('.description');
let aboutMe = document.querySelector('.aboutMe');
let skills = document.querySelector('.skills');

// main first section button
btnDown.addEventListener('click', function(){
    if(description.classList.contains('none')){
        description.classList.remove('none');
        description.classList.add('d_flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d_flex')
    }else if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none');
        aboutMe.classList.add('d_flex')
        description.classList.add('none')
        description.classList.remove('d_flex')
    }
    
})

btnUp.addEventListener('click', function(){
    if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none');
        aboutMe.classList.add('d_flex')
        description.classList.add('none')
        description.classList.remove('d_flex')
    }else if(description.classList.contains('none')){
        description.classList.remove('none');
        description.classList.add('d_flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d_flex')
    }
})

downbutton.addEventListener('click', function(){
    if(skills.classList.contains('none')){
        skills.classList.remove('none')
        skills.classList.add('d_flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d_flex')
    }
})

upButton.addEventListener('click', function(){
    if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none')
        aboutMe.classList.add('d_flex')
        skills.classList.add('none')
        skills.classList.remove('d_flex')
    }
})

// arrow to top
window.addEventListener('scroll', function () {
    const scrollToTop = document.getElementById('scroll-to-top');
    if (window.scrollY > 200) {
      scrollToTop.classList.add('visible');
    } else {
      scrollToTop.classList.remove('visible');
    }
  });

  //carosello logica
let counter = 0;
// Memorizza i dati dei progetti globalmente
let projectsData; 

function caricaJSON() {
  fetch('dati.json')
    .then(response => response.json())
    .then(data => {
      projectsData = data.projects; 
      elaboraDati();
    })
    .catch(error => {
      console.error('Errore nel caricamento del JSON:', error);
    });
}

function elaboraDati() {
  const imageCarusel = document.querySelector('.imageCarusel');
  const projectsInfo = document.querySelector('.projectsInfo');

  // Imposta i dati in base al contatore corrente
  imageCarusel.src = projectsData[counter].image;
  projectsInfo.querySelector('h4').textContent = projectsData[counter].title;
  projectsInfo.querySelector('p').textContent = projectsData[counter].paragraph;
}

function prevButton() {
  if (counter > 0) {
    counter--;
  } else {
    // Torna all'ultimo elemento se si è alla prima immagine
    counter = projectsData.length - 1; 
  }
  elaboraDati();
}

function nextButton() {
  if (counter < projectsData.length - 1) {
    counter++;
  } else {
    // Torna al primo elemento se si è all'ultima immagine
    counter = 0; 
  }
  elaboraDati();
}

const body = document.querySelector('body')
const menuOffCanvas = document.querySelectorAll('.menuOffCanvas')
const offCanvas = document.querySelector('.offcanvas')
menuOffCanvas.forEach(function(menu) {
  menu.addEventListener('click', function() {
    offCanvas.classList.remove('show');
    offCanvas.removeAttribute('aria-modal');
    offCanvas.removeAttribute('role');
    const backDrop = document.querySelector('.offcanvas-backdrop')
    if (backDrop !== null) {
      backDrop.remove();
    }
    console.log('click');
    body.style.overflow = ''
    body.style.paddingRight = ''

  });
});

document.addEventListener('DOMContentLoaded', function () {
  caricaJSON();
});

  
  








