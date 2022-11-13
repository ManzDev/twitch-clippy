class ClippyMetal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ClippyMetal.styles}</style>
    <div class="body">
      <svg class="metal" viewBox="0 0 45 125">
        <filter id="shadow" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="0 2" />
        </filter>
        <path class="shadow" />
        <path class="shape" />
      </svg>
    </div>`;
  }
}

customElements.define("clippy-metal", ClippyMetal);
