import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createGallery = () => {
    let items = '';
    galleryItems.forEach(galleryItem => {
        items += `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    alt="${galleryItem.description}"
                />
            </a>
        </li>
        `;
    })

    gallery.innerHTML = items;
}

createGallery();

let lightbox = new SimpleLightbox('.gallery__link', { 
    captionsData: "alt",
    captionDelay: 250
});