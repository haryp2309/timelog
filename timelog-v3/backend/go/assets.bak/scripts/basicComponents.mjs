import { LitElement, html, css, property } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';


export class HelloWorld extends LitElement {

    static styles = css`p { color: blue }`;

    //@property()
    name = 'Somebody';

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }

}