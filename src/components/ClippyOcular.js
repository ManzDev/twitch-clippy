import "./ClippyEye.js";

class ClippyOcular extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyOcular.styles}</style>
    <div class="container">
      <div class="eyebrow-container">
        <div class="eyebrow"></div>
      </div>
      <clippy-eye></clippy-eye>
    </div>`;
  }
}

customElements.define("clippy-ocular", ClippyOcular);
