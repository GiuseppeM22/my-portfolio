let btnDown = document.getElementById('buttonDown');
let btnUp = document.getElementById('buttonUp');
let downbutton = document.getElementById('downButton');
let upButton = document.getElementById('upButton');
let description = document.querySelector('.description');
let aboutMe = document.querySelector('.aboutMe');
let skills = document.querySelector('.skills')

// main first section button
btnDown.addEventListener('click', function(){
    if(description.classList.contains('none')){
        description.classList.remove('none');
        description.classList.add('d-flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d-flex')
    }else if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none');
        aboutMe.classList.add('d-flex')
        description.classList.add('none')
        description.classList.remove('d-flex')
    }
    
})

btnUp.addEventListener('click', function(){
    if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none');
        aboutMe.classList.add('d-flex')
        description.classList.add('none')
        description.classList.remove('d-flex')
    }else if(description.classList.contains('none')){
        description.classList.remove('none');
        description.classList.add('d-flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d-flex')
    }
})

downButton.addEventListener('click', function(){
    if(skills.classList.contains('none')){
        skills.classList.remove('none')
        skills.classList.add('d-flex')
        aboutMe.classList.add('none')
        aboutMe.classList.remove('d-flex')
    }
})

upButton.addEventListener('click', function(){
    if(aboutMe.classList.contains('none')){
        aboutMe.classList.remove('none')
        aboutMe.classList.add('d-flex')
        skills.classList.add('none')
        skills.classList.remove('d-flex')
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
  








