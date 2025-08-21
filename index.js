import{a as w,S as v,i as y}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();w.defaults.baseURL="https://pixabay.com/api/";async function u(i,e){return(await w.get("",{params:{key:"51819107-ec467fcdcf3190bdaabfbeda8",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data.hits}let f=null;function h(i){const e=i.map(r=>`<li class="gallery-item">
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
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",e),f?f.refresh():f=new v(".gallery a")}function q(){document.querySelector(".gallery").innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function n(){document.querySelector(".loader").classList.add("hidden")}function m(){document.querySelector(".show-more").classList.add("hidden")}function g(){document.querySelector(".show-more").classList.remove("hidden")}const b=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]'),d=document.querySelector('button[type="submit"]'),s=document.querySelector(".show-more");let a=1,l="";d.disabled=!0;s.disabled=!0;n();m();L.addEventListener("input",()=>{L.value.trim()===""?d.disabled=!0:d.disabled=!1});b.addEventListener("submit",async i=>{i.preventDefault(),S(),q(),l=L.value.trim(),a=1;try{const e=await u(l,a);e.length===0?(n(),y.warning({title:":(",message:"So sad, nothing found",position:"topRight"}),b.reset(),d.disabled=!0,m()):(h(e),n(),g(),s.textContent=`Give me more ${l}`,a+=1,(await u(l,a)).length===0?(s.disabled=!0,m()):s.disabled=!1)}catch(e){y.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${e}`,position:"topRight"}),n()}});s.addEventListener("click",async i=>{i.preventDefault(),m(),s.disabled=!0,S();try{const e=await u(l,a);if((await u(l,a+1)).length===0)h(e),b.reset(),n(),g(),s.textContent=`No more ${l}`,d.disabled=!0,s.disabled=!0;else{h(e);const c=document.querySelector(".gallery .gallery-item");if(c){const t=c.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}n(),g(),s.disabled=!1,s.textContent=`Give me more ${l}`,a+=1}}catch(e){y.warning({title:"OH MY GOD, SOMETHING WENT WRONG!",message:`${e}`,position:"topRight"}),n()}});
//# sourceMappingURL=index.js.map
