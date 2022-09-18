(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const i="https://rickandmortyapi.com/api/character/",l=async r=>{const e=r?`${i}${r}`:i;try{return await(await fetch(e)).json()}catch{console.log(err)}},d=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",u=async()=>{const r=d(),e=await l(r);return`
    <div class="Character-inner">
        <article class="Characters-card">
        <img src="${e.image}" alt="${e.name}">
        
        </article>
        <article class="Characters-card" id="info">
        <h3>${e.name}</h3>
            <h3>Episodes:  <span> ${e.episode.length}</span></h3>
            <h3>Status:  <span> ${e.status}</span></h3>
            <h3>Species:  <span> ${e.species}</span></h3>
            <h3>Gender:  <span> ${e.gender}</span></h3>
            <h3>Origin:  <span> ${e.origin.name}</span></h3>
            <h3>Last Location:  <span> ${e.location.name}</span></h3>
        </article>
    </div>
    `},p=()=>`
      <div class="Error404">
  <img src="../../assets/error-4044.jpg" alt="404 Page Not Found">      </div>
    `,m=async()=>`
    <div class="Characters">
    ${(await l()).results.map(a=>`
    <article class="Character-item">
            <a href="#/${a.id}/">
                <img src="${a.image}" alt="${a.name}">
                <h2>${a.name}</h2>
            </a>
        </article>
    `).join("")}
        
    </div>
    `,f=()=>`
    <div class="Header-main">
        <div class="Header-logo">
            
                <a href="/">
                    <img class="logo-img" src="../../assets/Rick-and-Morty.png" alt="logo rick y morty">
                </a>
            
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        
    </div>
    `,g=r=>r.length<=3?r==="/"?r:"/:id":`/${r}`,c={"/":m,"/:id":u,"/Contact":"contact"},h=async()=>{const r=document.querySelector("#header"),e=document.querySelector("#con");r.innerHTML=await f();let a=d(),n=await g(a),t=c[n]?c[n]:p;e.innerHTML=await t()};window.addEventListener("load",h);window.addEventListener("hashchange",h);
