class ClippyPaper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyPaper.styles}</style>
    <div class="page"></div>`;
  }
}

customElements.define("clippy-paper", ClippyPaper);
