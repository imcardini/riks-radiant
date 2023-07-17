// Get the elements
const thumbnails = document.querySelectorAll('.thumbnails img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;

// Show the lightbox
function showLightbox(index) {
    lightboxImg.src = thumbnails[index].src;
    lightbox.style.display = 'block';
    currentImageIndex = index;
}

// Hide the lightbox
function hideLightbox() {
    lightbox.style.display = 'none';
}

// Navigate to the previous image
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = thumbnails.length - 1;
    }
    showLightbox(currentImageIndex);
}

// Navigate to the next image
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= thumbnails.length) {
        currentImageIndex = 0;
    }
    showLightbox(currentImageIndex);
}

// Add click event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showLightbox(index);
    });
});

// Add click event listeners to navigation buttons
closeBtn.addEventListener('click', hideLightbox);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
