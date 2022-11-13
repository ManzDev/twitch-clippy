class ClippyDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  setText(text) {
    this.shadowRoot.querySelector(".container").innerHTML = text;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyDialog.styles}</style>
    <div class="container">
      <p>Parece que estás escribiendo una carta.</p>
      <p>¿Quieres ayuda?</p>

      <span>Sí, centrar la carta con float</span>
      <span>Sí, maquetar la carta con tablas</span>
      <span>No, mejor la hago en Word</span>

      <p><input type="checkbox"> No mostrar de nuevo</p>
    </div>`;
  }
}

customElements.define("clippy-dialog", ClippyDialog);
