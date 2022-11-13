(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --eye-width: 65px;
        --eye-height: 48px;
      }

      .sclera {
        width: var(--eye-width);
        height: var(--eye-height);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #222;
        position: relative;
        box-shadow:
          -7px -4px 5px #8f8c9e inset,
          -1px -1px 2px #252525 inset;
        overflow: hidden;
      }

      .sclera::before {
        content: "";
        background: radial-gradient(circle 20px at 50% 75%, #444, #222);
        width: 100%;
        height: 0%;
        z-index: 5;
        position: absolute;
        top: 0;
        transition: height 0.40s ease;
        border-radius: 10%;
      }

      .sclera::after {
        content: "";
        background: radial-gradient(circle 20px at 50% 75%, #555, #333);
        width: 100%;
        height: 0%;
        z-index: 3;
        position: absolute;
        bottom: 0;
        transition: height 0.40s ease;
        border-radius: 5%;
      }

      :host-context(.blink) .sclera::before {
        height: 85%;
      }

      :host-context(.blink) .sclera::after {
        height: 25%;
      }

      :host-context([evil]) .sclera::before {
        height: 35%;
      }

      :host-context([evil]) .sclera::after {
        height: 45%;
      }

      .pupil {
        background: #0f0f0f;
        background-image:
          radial-gradient(ellipse at 55% 55%, transparent 0 55%, #333 65% 100%),
          radial-gradient(circle at 25% 25%, #59564f 0 5%, #0f0f0f 40% 100%);
        width: 50%;
        height: 45%;
        border-radius: 50%;
        border: 2px solid #222;
        transition: translate 0.5s ease;
        translate: 0 0;
      }

      :host-context([look-left]) .pupil {
        translate: -12px 0;
      }

      :host-context([look-right]) .pupil {
        translate: 12px 0;
      }
    `}connectedCallback(){this.render(),this.classList.add("close")}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="sclera">
      <div class="pupil"></div>
    </div>`}}customElements.define("clippy-eye",s);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --eyebrow-width: 70px;
        --eyebrow-height: 20px;
        --eyebrow-shape: path("M 0 20 C 7 14 19.5 9 35 9.5 C 49 11 55 18 60 18.5 C 70 19.5 68.5 10 59 5 C 50 1.5 25 -6.5 0 20");
      }

      .eyebrow {
        width: var(--eyebrow-width);
        height: var(--eyebrow-height);
        background: #141412;
        clip-path: var(--eyebrow-shape);
        transition: transform 1s;
      }

      .eyebrow-container {
        filter: drop-shadow(0 0 2px #fff3);
        z-index: 10;
        position: relative;
      }

      :host(.left) .eyebrow { transform: rotate(-4deg); }
      :host(.right) .eyebrow { transform: rotate(4deg); }

      :host(.right) .eyebrow {
        transform: rotate(4deg) scaleX(-1);
      }

      :host-context([evil]):host(.left) .eyebrow { transform: rotate(18deg) translateY(5px); }
      :host-context([evil]):host(.right) .eyebrow { transform: rotate(-18deg) translateY(5px) scaleX(-1); }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="eyebrow-container">
        <div class="eyebrow"></div>
      </div>
      <clippy-eye></clippy-eye>
    </div>`}}customElements.define("clippy-ocular",i);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        transform: translateY(-70px);
      }

      .body {
        width: var(--width);
      }

      .metal :is(.shape, .shadow) {
        stroke-width: 3.5px;
        stroke-linecap: round;
        fill: none;
      }

      .metal .shape {
        stroke: #333;
        filter: url(#shadow);
      }

      .metal .shadow {
        stroke: #999;
      }

      .metal path {
        filter: drop-shadow(1px 1px 1px #000);
      }

      :is(.shape, .shadow) {
        d: path("m 13.6 44.2 c 0 0 -1 11.4 0 18.7 c 0.5 4 1.8 9.2 7.2 9.8 c 2.7 0.2 5.5 -1.8 6.7 -4.4 c 2.3 -4.8 0 -20.6 2 -33.4 c 1.2 -8.2 3 -17.5 3.6 -24.2 C 33.4 7.4 30.2 4.5 26.8 3.3 C 24.2 2.4 20.2 1.9 18 3.5 C 13.2 6.8 9.7 15.9 8.5 25.9 A 213.3 213.3 0 0 0 9 69.8 c 1.1 8.4 2.6 21.2 14.9 20.9 c 5.4 0 9.8 -2.3 11.4 -11 c 1.4 -7.9 -0.8 -15.9 0 -23.4 C 36 52 39 45 39 45");
      }

      :host-context([evil]) :is(.shape, .shadow) {
        animation: come-here 1s ease infinite;
      }

      @keyframes come-here {
        0%, 100% {
          d: path("m 13.6 44.2 c 0 0 -1 11.4 0 18.7 c 0.5 4 1.8 9.2 7.2 9.8 c 2.7 0.2 5.5 -1.8 6.7 -4.4 c 2.3 -4.8 0 -20.6 2 -33.4 c 1.2 -8.2 3 -17.5 3.6 -24.2 C 33.4 7.4 30.2 4.5 26.8 3.3 C 24.2 2.4 20.2 1.9 18 3.5 C 13.2 6.8 9.7 15.9 8.5 25.9 A 213.3 213.3 0 0 0 9 69.8 c 1.1 8.4 2.6 21.2 14.9 20.9 c 5.4 0 9.8 -2.3 11.4 -11 c 1.4 -7.9 -0.8 -15.9 0 -23.4 C 36 52 39 45 39 42");
        }

        50% {
          d: path("m 13.6 44.2 c 0 0 -1 11.4 0 18.7 c 0.5 4 1.8 9.2 7.2 9.8 c 2.7 0.2 5.5 -1.8 6.7 -4.4 c 2.3 -4.8 0 -20.6 2 -33.4 c 1.2 -8.2 3 -17.5 3.6 -24.2 C 33.4 7.4 30.2 4.5 26.8 3.3 C 24.2 2.4 20.2 1.9 18 3.5 C 13.2 6.8 9.7 15.9 8.5 25.9 A 213.3 213.3 0 0 0 9 69.8 c 1.1 8.4 2.6 21.2 14.9 20.9 c 5.4 0 9.8 -2.3 11.4 -11 c 1.4 -7.9 -0.8 -15.9 -0.3 -18.7 C 36 53 39 57 41 61");
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${o.styles}</style>
    <div class="body">
      <svg class="metal" viewBox="0 0 45 125">
        <filter id="shadow" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="0 2" />
        </filter>
        <path class="shadow" />
        <path class="shape" />
      </svg>
    </div>`}}customElements.define("clippy-metal",o);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      .page {
        width: 210px;
        height: 254px;
        border-radius: 9% 0 7% 0 / 100% 0 60% 0;
        background:
          repeating-linear-gradient(#0000 0 15px, #06665dbf 15px 16px),
          radial-gradient(25% 140% at 0% 36%, #0000 70%, #ff000063 71% 72%, #0000 73% 74%, #ff000063 76% 76%, #0000 79%),
          linear-gradient(#97985F,#FAF798);
        -webkit-mask-image: radial-gradient(10% 100% at 1% 31%, #0000 70%, #000 75%);
        clip-path: polygon(0 100%, 0% 0%, 100% 0, 99% 5%, 98% 10%, 97% 15%, 96% 20%, 95.7% 25%, 96% 30%, 97% 35%, 98% 40%, 99% 45%, 100% 55%, 100% 100%);
        transform: rotate(3deg) skewX(-15deg);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="page"></div>`}}customElements.define("clippy-paper",n);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      .container {
        background: #ffffcc;
        border: 2px solid #000;
        border-radius: 15px;
        padding: 0.25em 1em;
        font-family: "Trebuchet MS";
        font-size: 16px;
        color: #000;
      }

      .container::before {
        content: "";
        width: 30px;
        height: 30px;
        display: inline-block;
        position: absolute;
        background: #ffffcc;
        clip-path: polygon(0 100%, 100% 0, 100% 100%);
        transform: translate(-38px, 15px);
      }

      span::before {
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        margin-right: 7px;
        vertical-align: middle;
        border: 1px outset grey;
        border-radius: 50%;
        background: #0823b5;
        background-image:
          radial-gradient(circle 3px at 35% 25%, #7fffff, transparent),
          radial-gradient(circle 4px at 60% 60%, #7fffff, transparent);
      }

      span {
        display: block;
      }
    `}setText(r){this.shadowRoot.querySelector(".container").innerHTML=r}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <p>Parece que est\xE1s escribiendo una carta.</p>
      <p>\xBFQuieres ayuda?</p>

      <span>S\xED, centrar la carta con float</span>
      <span>S\xED, maquetar la carta con tablas</span>
      <span>No, mejor la hago en Word</span>

      <p><input type="checkbox"> No mostrar de nuevo</p>
    </div>`}}customElements.define("clippy-dialog",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      .container {
        max-width: 475px;
        display: flex;
        gap: 25px;
      }

      .subcontainer {
        --width: 150px;
        --height: 290px;
        width: var(--width);
        height: var(--height);
      }

      :host([no-paper]) clippy-paper {
        display: none;
      }

      header {
        display: flex;
        justify-content: space-between;
        transform: translateY(40px) rotate(7deg);
        z-index: 5;
        position: relative;
      }

      clippy-paper {
        position: absolute;
        top: 60px;
        left: 5px;
        z-index: -1;
      }
    `}connectedCallback(){this.render()}setText(r){this.shadowRoot.querySelector("clippy-dialog").setText(r)}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="sub-container">
        <div class="clippy">
          <header>
            <clippy-ocular class="left"></clippy-ocular>
            <clippy-ocular class="right"></clippy-ocular>
          </header>
          <clippy-metal></clippy-metal>
        </div>
        <clippy-paper></clippy-paper>
      </div>
      <clippy-dialog></clippy-dialog>
    </div>`}}customElements.define("clippy-character",c);
