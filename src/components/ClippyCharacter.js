import "./ClippyOcular.js";
import "./ClippyMetal.js";
import "./ClippyPaper.js";
import "./ClippyDialog.js";

class ClippyCharacter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  setText(text) {
    this.shadowRoot.querySelector("clippy-dialog").setText(text);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyCharacter.styles}</style>
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
    </div>`;
  }
}

customElements.define("clippy-character", ClippyCharacter);
