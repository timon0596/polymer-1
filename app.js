import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Test extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          width: 1000px;
          height: 500px;
        }
      </style>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('test-component', Test);