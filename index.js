import{a as p,S as m,i as d}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();p.defaults.baseURL="https://pixabay.com/api/";function h(s){return p.get("",{params:{key:"51819107-ec467fcdcf3190bdaabfbeda8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits)}let a=null;function y(s){document.querySelector(".gallery").innerHTML=s.map(e=>`<li class="gallery-item">
	            <a class="gallery-link" href=${e.largeImageURL}>
		        <img 
		            class="gallery-image" 
		            src=${e.webformatURL}
		            alt=${e.tags} 
		        />
	            </a>
                <ul class="gallery-subscript">
                    <li class="subscript-item">
                        <h2>Likes</h2>
                        <p>${e.likes}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Views</h2>
                        <p>${e.views}</p>    
                    </li>
                    <li class="subscript-item">
                        <h2>Comments</h2>
                        <p>${e.comments}</p>
                    </li>
                    <li class="subscript-item">
                        <h2>Downloads</h2>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
                </li>`).join(""),a?a.refresh():a=new m(".gallery a")}function g(){document.querySelector(".gallery").innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function o(){document.querySelector(".loader").classList.add("hidden")}o();const f=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]'),l=document.querySelector("button");l.disabled=!0;c.addEventListener("input",s=>{c.value.trim()===""?l.disabled=!0:l.disabled=!1});f.addEventListener("submit",s=>{s.preventDefault(),b(),g();const e=c.value.trim();h(e).then(i=>{i.length===0?(o(),d.warning({title:":(",message:"So sad, nothing found",position:"topRight"}),f.reset(),l.disabled=!0):(y(i),o())}).catch(i=>{d.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${i}`,position:"topRight"}),o()})});
//# sourceMappingURL=index.js.map
