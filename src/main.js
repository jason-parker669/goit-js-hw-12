import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js"
import { createGallery, clearGallery, showLoader, hideLoader,showLoadMoreButton,hideLoadMoreButton } from "./js/render-functions.js"
   
const searchForm = document.querySelector('.form');
const inputField = document.querySelector('input[name="search-text"]');
const searchButton = document.querySelector('button[type="submit"]');
const moreButton = document.querySelector('.show-more');
let page = 1;
let query = "";
searchButton.disabled = true;
hideLoader();
hideLoadMoreButton();


inputField.addEventListener("input", () => { 
    if (inputField.value.trim() === '')
        searchButton.disabled = true;
    else searchButton.disabled = false;
})

searchForm.addEventListener("submit", async (event) => { 
    event.preventDefault();
    clearGallery();
    showLoader();
    query = inputField.value.trim();
    page = 1;
    try {
        const galleryData = await getImagesByQuery(query, page);
        const galleryArray = galleryData.hits;
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
                                       
                     if (document.querySelectorAll(".gallery .gallery-item").length >= galleryData.totalHits) {
                        iziToast.warning({
                             title: `That's all!`,
                              message: `We're sorry, but you've reached the end of search results.`,
                             position: 'bottomCenter',
                        });
                     }
                     else { 
                         showLoadMoreButton();
                         moreButton.textContent = `Give me more ${query}`;
                    }             
                }
    }
    catch (error)
    {       iziToast.warning({
                    title: 'OH MY GOD, SOMETHING WENT WRONG!',
                    message: `${error}`,
                    position: 'topRight',
            });
            hideLoader();
    };

});

moreButton.addEventListener("click", async (event) => { 
    event.preventDefault();
    hideLoadMoreButton();
    showLoader();
    page += 1;
    try {
        const galleryData = await getImagesByQuery(query, page);
        const galleryArray = galleryData.hits;
        createGallery(galleryArray);
        hideLoader();
        const card = document.querySelector('.gallery .gallery-item');
        if (card) {
                  const h = card.getBoundingClientRect().height;
                  window.scrollBy({ top: 2 * h, behavior: 'smooth' });
            }
        if (document.querySelectorAll(".gallery .gallery-item").length >= galleryData.totalHits) {
            iziToast.warning({
                title: `That's all!`,
                message: `We're sorry, but you've reached the end of search results.`,
                position: 'bottomCenter',
        });
                }
            else {
                showLoadMoreButton();
                moreButton.textContent = `Give me more ${query}`;                          
                }
    }
    catch (error)
    {       iziToast.warning({
                    title: 'OH MY GOD, SOMETHING WENT WRONG!',
                    message: `${error}`,
                    position: 'topRight',
            });
            hideLoader();
    };

})


