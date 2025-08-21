import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js"
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js"

hideLoader();
    
const searchForm = document.querySelector('.form');
const inputField = document.querySelector('input[name="search-text"]');
const searchButton = document.querySelector('button');

searchButton.disabled = true;

inputField.addEventListener("input", (event) => { 
    if (inputField.value.trim() === '')
        searchButton.disabled = true;
    else searchButton.disabled = false;
})

searchForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    showLoader();
    clearGallery();
    const query = inputField.value.trim();
    getImagesByQuery(query)
        .then((galleryArray) => { 
            if (galleryArray.length === 0) {
                hideLoader();
                iziToast.warning({
                    title: ':(',
                    message: 'So sad, nothing found',
                    position: 'topRight',
                });
                searchForm.reset();
                searchButton.disabled = true;

            }
            else {
                createGallery(galleryArray);
                hideLoader();
             }
        })
        .catch((error) => {iziToast.warning({
                    title: 'OH MY GOD, SOMETHING WENT WRONG!',
                    message: `${error}`,
                    position: 'topRight',
            });
            hideLoader();
        });

});



