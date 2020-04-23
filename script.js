var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // console.log(dots[0]);
  var thup = document.getElementsByClassName("thumbnail-up");
  console.log (dots)
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // loops
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < thup.length; i++) {
    thup[i].style.display = "none";
  }
  for (i = 0; i < thup.length; i++) {
    thup[i].className = thup[i].className.replace(" active1", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  thup[slideIndex - 1].style.display = "block";
  thup[slideIndex - 1].className += " active1";
}