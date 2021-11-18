window.addEventListener('load', function() {
  "use strict";

  const images = document.querySelectorAll('.galpic-sm');
  const myModal = document.querySelector('#myModal');
  const modalSection = document.querySelector('#modalSection');
  const closeSlide = document.querySelector('.closeSlide');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

// ATTACHING CLICK EVENT TO EACH GALLERY IMAGE ----

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {

// OPENING THE MODAL ------------------------------
      myModal.classList.add('lit');
      let img = document.createElement('img');

      img.src = images[i].src;
      modalSection.appendChild(img);

// CLOSING THE MODAL ------------------------------
      function closeModal() {
        img.remove();
        myModal.classList.remove('lit');
      }

      closeSlide.addEventListener('click', () => {
        closeModal();
      });
      myModal.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget)
          return;

        closeModal();
      });

// NAVIGATION CONTROLS ----------------------------
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        i--;
        if (i < 0) {
          i = images.length - 1
        };
        img.src = images[i].src;
      });

      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        i++;
        if (i >= images.length) {
          i = 0
        };
        img.src = images[i].src;
      });

    });
  }

});
