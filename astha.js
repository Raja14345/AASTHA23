let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the current slide and hide others
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (!slides || slides.length === 0) {
        console.error("No slides found");
        return;
    }
    
    if (n > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }    
    if (n < 1) {
        slideIndex = slides.length; // Reset to the last slide
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
    }
}

// Function to automatically advance slides
function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Call autoSlide function every 2 seconds
setInterval(autoSlide, 2000);
