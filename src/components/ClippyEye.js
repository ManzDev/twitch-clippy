class ClippyEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
    this.classList.add("close");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyEye.styles}</style>
    <div class="sclera">
      <div class="pupil"></div>
    </div>`;
  }
}

customElements.define("clippy-eye", ClippyEye);
