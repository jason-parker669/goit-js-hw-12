import axios from 'axios';
axios.defaults.baseURL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page) { 
    const response = await axios.get("", {
        params: {
            key: "51819107-ec467fcdcf3190bdaabfbeda8",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page: page
        }
    })
    return response.data;
}