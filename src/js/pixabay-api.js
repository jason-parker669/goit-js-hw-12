import axios from 'axios';
axios.defaults.baseURL = "https://pixabay.com/api/";

export function getImagesByQuery(query) { 
    return axios.get("", {
        params: {
            key: "51819107-ec467fcdcf3190bdaabfbeda8",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    }).then((response) => response.data.hits);
}