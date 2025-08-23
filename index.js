import{a as f,S as v,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();f.defaults.baseURL="https://pixabay.com/api/";async function g(s,e){return(await f.get("",{params:{key:"51819107-ec467fcdcf3190bdaabfbeda8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}let m=null;function b(s){const e=s.map(r=>`<li class="gallery-item">
	            <a class="gallery-link" href=${r.largeImageURL}>
		        <img 
		            class="gallery-image" 
		            src=${r.webformatURL}
		            alt=${r.tags} 
		        />
	            </a>
                <ul class="gallery-subscript">
                    <li class="subscript-item">
                        <h2>Likes</h2>
                        <p>${r.likes}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Views</h2>
                        <p>${r.views}</p>    
                    </li>
                    <li class="subscript-item">
                        <h2>Comments</h2>
                        <p>${r.comments}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Downloads</h2>
                        <p>${r.downloads}</p>
                    </li>
                </ul>
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",e),m?m.refresh():m=new v(".gallery a")}function q(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}function w(){document.querySelector(".show-more").classList.add("hidden")}function S(){document.querySelector(".show-more").classList.remove("hidden")}const p=document.querySelector(".form"),h=document.querySelector('input[name="search-text"]'),c=document.querySelector('button[type="submit"]'),y=document.querySelector(".show-more");let u=1,a="";c.disabled=!0;l();w();h.addEventListener("input",()=>{h.value.trim()===""?c.disabled=!0:c.disabled=!1});p.addEventListener("submit",async s=>{s.preventDefault(),q(),L(),a=h.value.trim(),u=1;try{const e=await g(a,u),r=e.hits;r.length===0?(l(),n.warning({title:":(",message:"So sad, nothing found",position:"topRight"}),p.reset(),c.disabled=!0):(b(r),l(),document.querySelectorAll(".gallery .gallery-item").length>=e.totalHits?n.warning({title:"That's all!",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}):(S(),y.textContent=`Give me more ${a}`))}catch(e){n.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${e}`,position:"topRight"}),l()}});y.addEventListener("click",async s=>{s.preventDefault(),w(),L(),u+=1;try{const e=await g(a,u),r=e.hits;b(r),l();const i=document.querySelector(".gallery .gallery-item");if(i){const t=i.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}document.querySelectorAll(".gallery .gallery-item").length>=e.totalHits?n.warning({title:"That's all!",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}):(S(),y.textContent=`Give me more ${a}`)}catch(e){n.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${e}`,position:"topRight"}),l()}});
//# sourceMappingURL=index.js.map
