const slides = document.querySelectorAll(".slides img");
let intervalId = null;
let slideIndex = 0;
// sliderInitializer(slideIndex);
document.addEventListener("DOMContentLoaded", sliderInitializer());

function sliderInitializer(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    console.log(index)
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex)
}

function nextSlide(){
    console.log("slideIndex in nextSlide() : ", slideIndex)
    slideIndex++;
    showSlide(slideIndex);
}

