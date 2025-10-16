const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializer);

function initializer(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    console.log(slideIndex);
}

function showSlide(index){
    if(index > slides.length - 1){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
    slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    console.log(slideIndex);
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
    clearInterval(intervalId);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}   