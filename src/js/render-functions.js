import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function createGallery(images) { 
    document.querySelector(".gallery").innerHTML = images.map((image) => { 
        return `<li class="gallery-item">
	            <a class="gallery-link" href=${image.largeImageURL}>
		        <img 
		            class="gallery-image" 
		            src=${image.webformatURL}
		            alt=${image.tags} 
		        />
	            </a>
                <ul class="gallery-subscript">
                    <li class="subscript-item">
                        <h2>Likes</h2>
                        <p>${image.likes}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Views</h2>
                        <p>${image.views}</p>    
                    </li>
                    <li class="subscript-item">
                        <h2>Comments</h2>
                        <p>${image.comments}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Downloads</h2>
                        <p>${image.downloads}</p>
                    </li>
                </ul>
                </li>`}).join("");
    if (!lightbox) {
        lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
    document.querySelector(".gallery").innerHTML = "";
}

export function showLoader() { 
    document.querySelector(".loader").classList.remove("hidden");
}

export function hideLoader() { 
    document.querySelector(".loader").classList.add("hidden");
}