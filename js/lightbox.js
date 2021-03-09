const slideShow = document.querySelectorAll('.galpic-sm');
const galPics = Array.from(slideShow);
const myModal = document.querySelector('#myModal');
const modalClose = document.querySelector('.closeSlide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const modalSection = document.querySelector('.modal-section');

for(var galpic of galPics) {
    const slidePic = document.createElement('img');
    slidePic.src = galpic.src;
    slidePic.classList.add('mySlides');
    modalSection.appendChild(slidePic);
        galpic.addEventListener('click', function(){
            myModal.style.display = "block";
            let current = galPics.indexOf(this);
            console.log(current);
            currentSlide(current + 1);
  });
}

// CLOSE THE MODAL
  modalClose.addEventListener('click', function(){
    myModal.style.display = "none";
  });

  myModal.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget)
      return;
    myModal.style.display = 'none';
  })
  

prev.addEventListener('click', () => {
  plusSlides(-1);
});
next.addEventListener('click', () => {
  plusSlides(1);
});

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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }