import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { globalStyle } from "../styles";

@customElement("icon-timer")
export class TimerIcon extends LitElement {
  static styles = [
    globalStyle,
    css`
      .material-symbols-outlined {
        font-family: "Material Symbols Outlined";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
      }

      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }

      :host {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ];

  render() {
    return html` <span class="material-symbols-outlined"> timer </span>`;
  }
}
