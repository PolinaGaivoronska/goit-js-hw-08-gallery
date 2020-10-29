import images from './gallery-items.js';
console.log(images);

const galleryContainer = document.querySelector('.js-gallery');
const MainGallery = createGallary(images);
const Lightbox = document.querySelector('.js-lightbox');
const LightboxImage = document.querySelector('.lightbox__image');
const LightboxClose = document.querySelector('.lightbox__button');

galleryContainer.insertAdjacentHTML('beforeend', MainGallery);

function createGallary(images) {
    return images.map(image => {
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${image.original}"
        >
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>`
    }).join('');
}
console.log(createGallary);

galleryContainer.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return
  }

  Lightbox.classList.add('is-open');
  LightboxImage.src = event.target.dataset.source;
  LightboxImage.alt = event.target.alt;
}

LightboxClose.addEventListener('click', onCloseModal);
function onCloseModal(event) {
  if (event.target.nodeName === 'IMG') {
    return
  }
  
  Lightbox.classList.remove('is-open');
  
}