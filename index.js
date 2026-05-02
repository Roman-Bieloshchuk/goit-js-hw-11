import{a as d,S as p,i as a}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="55686404-067947f5ffb7fa0cb4c06d340",g="https://pixabay.com/api/";function y(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img class="gallery-image" src="${o}" alt="${e}" width="360"/>
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${t}</p>
        <p class="info-item"><b>Views:</b> ${s}</p>
        <p class="info-item"><b>Comments:</b> ${f}</p>
        <p class="info-item"><b>Downloads:</b> ${m}</p>
      </div>
    </li>`).join("");l.innerHTML=r,b.refresh()}function c(){l.innerHTML=""}function S(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",$);function $(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(r===""){a.error({message:"Please enter a search query!",position:"topRight"});return}c(),S(),y(r).then(o=>{if(o.hits.length===0)return a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();L(o.hits)}).catch(o=>{a.error({message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{q(),i.target.reset()})}
//# sourceMappingURL=index.js.map
