import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { globalStyle } from "../styles";

@customElement("c-button")
export class CustomButton extends LitElement {
  static styles = [
    globalStyle,
    css`
      button {
        display: inline-flex;
        padding: 0.5rem 1rem;
        justify-content: center;
        align-items: center;
        border-radius: 0.375rem;
        height: 2.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        white-space: nowrap;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
        background-color: hsl(var(--fg));
        border: none;
        color: hsl(var(--bg));
        cursor: pointer;
      }
      button:hover {
        background-color: hsl(var(--primary) / 0.9);
      }
    `,
  ];

  @property()
  label: string = "";

  render() {
    return html` <button>${this.label}</button>`;
  }
}
