let logo = document.querySelector("#logo");
let aboutLink = document.querySelector("#aboutLink");
let skillsLink = document.querySelector("#skillsLink");
let contactLink = document.querySelector("#contactLink");
let main = document.querySelector("#main");
let about = document.querySelector("#about");
let skills = document.querySelector("#skills");
let contact = document.querySelector("#contact");
let mainH1 = document.querySelector("#main h1");
let mainH2 = document.querySelector("#main h1:nth-child(2)");
let mainPara = document.querySelector("#main p");
let mainAnker = document.querySelector("#main a");
let aboutH1 = document.querySelector("#about h1");
let aboutPara = document.querySelector("#about p");
let aboutAnker = document.querySelector("#about a");
let skillsH1 = document.querySelector("#skills h1");
let skillsPara = document.querySelector("#skills p");
let skillsCard = document.querySelector("#skills .skills-card");
let contactH1 = document.querySelector("#contact h1");
let contactForm = document.querySelector("#contact form");
let contactAnker = document.querySelector("contact a");


function handleOpacity(opacityOne, opacityZero1, opacityZero2, opacityZero3){
    opacityOne.style.opacity = 1;
    opacityZero1.style.opacity=0;
    opacityZero2.style.opacity=0;
    opacityZero3.style.opacity=0;
}

function handleAnimation(){
    for(let i=0; i<arguments.length; i++){
        arguments[i].classList.remove('main-animation');
        arguments[i].offsetWidth;
        arguments[i].classList.add('main-animation');
    }
}

logo.addEventListener('click', function(){
    handleOpacity(main, about, skills, contact);
    handleAnimation(mainH1, mainH2, mainPara, mainAnker);
})
aboutLink.addEventListener('click', function(){
    handleOpacity(about, main, skills, contact);
    handleAnimation(aboutH1, aboutPara, aboutAnker);
})
skillsLink.addEventListener('click', function(){
    handleOpacity(skills, main, about, contact);
    handleAnimation(skillsH1, skillsPara, skillsCard);
})
contactLink.addEventListener('click', function(){
    handleOpacity(contact, main, about, skills);
    handleAnimation(contactH1, contactForm, contactAnker);
})

let modal = document.querySelector('.modal')
let trigger = document.querySelector('.open-modal')
let closeButton = document.querySelector('.close-modal')

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowClick(e){
    if(e.target === modal){
        toggleModal()
    }
}

trigger.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)
window.addEventListener('click', windowClick)