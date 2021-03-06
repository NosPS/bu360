
function openQueue(id) {
   let modal = document.getElementById('modal-queue')
   //let slide = document.getElementById(id)
   modal.style.display = 'block';
   //slide.style.display = 'flex';
   document.getElementById('current-queue').value = id
   console.log('openQueue', id)
   getUsername();
}

function closeQueue() {
   console.log('closequeue')
   let modal = document.getElementById('modal-queue')
   //let slide = document.getElementById('current-queue')
   //let current = document.getElementById(slide.value)
   modal.style.display = 'none';
   //current.style.display = 'none';
}

function openModal(id) {
   let modal = document.getElementById('modal-gallery')
   let slide = document.getElementById(id)
   modal.style.display = 'block';
   slide.style.display = 'flex';
   document.getElementById('current-slide').value = id
   openSlide();
   console.log('openModal', id)
}

function closeModal() {
   let modal = document.getElementById('modal-gallery')
   let slide = document.getElementById('current-slide')
   let current = document.getElementById(slide.value)
   modal.style.display = 'none';
   current.style.display = 'none';
}

var slideIndex = 1;

function plusSlide(n) {
   showSlide(slideIndex += n);
}

function currentDiv(n) {
   showSlide(slideIndex = n);
}

function openSlide() {
   showSlide(1)
}

function showSlide(n) {
   let current = document.getElementById('current-slide')
   var x = document.querySelectorAll('#' + current.value + ' .img-slide')
   if (x.length < 1)
      return;

   if (n > x.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = x.length
   }
   for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
   }
   x[slideIndex-1].style.display = "block";  
}