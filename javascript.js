function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "LEARNER",
    "DEVELOPER",
    "ENGINEER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

function scrollToSection(){
    const section=document.getElementById(sectionId);
    section.scrollIntoView({behavior:'smooth'})
}

//show button when scrolling down
window.onscroll=function() {scrollFunction()};

function scrollFunction(){
    const btn = document.getElementById("goAboveBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btn.style.display = "block";
    }else{
        btn.style.display="none";
    }
}
//scroll to top when clicked
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}