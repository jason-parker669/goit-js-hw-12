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
moreButton.disabled = true;
hideLoader();
hideLoadMoreButton();


inputField.addEventListener("input", () => { 
    if (inputField.value.trim() === '')
        searchButton.disabled = true;
    else searchButton.disabled = false;
})

searchForm.addEventListener("submit", async (event) => { 
    event.preventDefault();
    showLoader();
    clearGallery();
    query = inputField.value.trim();
    page = 1;
    try {
        const galleryArray = await getImagesByQuery(query, page);
            if (galleryArray.length === 0) {
                    hideLoader();
                    iziToast.warning({
                        title: ':(',
                        message: 'So sad, nothing found',
                        position: 'topRight',
                    });
                    searchForm.reset();
                    searchButton.disabled = true;
                    hideLoadMoreButton();

                }
                else {
                    createGallery(galleryArray);
                    hideLoader();
                    showLoadMoreButton();
                    moreButton.textContent = `Give me more ${query}`;
                    page += 1;   
                    
                    const nextGallery = await getImagesByQuery(query, page);
                     if (nextGallery.length === 0)
                     {
                        moreButton.disabled = true; 
                        hideLoadMoreButton();
                     }
                     else
                        moreButton.disabled = false;
                
                    
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
    moreButton.disabled = true;
    showLoader();
        try {
            const galleryArray = await getImagesByQuery(query, page);
            const nextGalleryArray = await getImagesByQuery(query, page+1)
            if (nextGalleryArray.length === 0) {
                createGallery(galleryArray);
                searchForm.reset();
                hideLoader();
                showLoadMoreButton();
                moreButton.textContent = `No more ${query}`;
                searchButton.disabled = true;
                moreButton.disabled = true;
                }
            else {

                createGallery(galleryArray);
                const card = document.querySelector('.gallery .gallery-item');
                if (card) {
                  const h = card.getBoundingClientRect().height;
                  window.scrollBy({ top: 2 * h, behavior: 'smooth' });
                }
                hideLoader();
                showLoadMoreButton();
                moreButton.disabled = false;
                moreButton.textContent = `Give me more ${query}`;
                page += 1;              
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


