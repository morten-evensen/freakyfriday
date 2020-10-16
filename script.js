var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide-container");
    var i = 0;
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}



function drop() {
    var dropdown = document.getElementById("drop");
    if (window.getComputedStyle(dropdown).display === "none") {
        dropdown.style.display = "block";
        document.getElementById("just").style.marginLeft = "105px";
    } else {
        dropdown.style.display = "none";
        document.getElementById("just").style.marginLeft = "0";
    }
       
}