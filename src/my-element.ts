/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, customElement, property, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */

function headerTemplate(text: string) {
  return html`<header>${text}</header>`;
}

function footerTemplate(text: string) {
  return html`<footer>${text}</footer>`;
}

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  @property({type: Boolean})
  prop3 = true;

  @property({type: String})
  prop4 = 'test';

  @property({type: Object})
  prop5 = {headerText: 'Header Title', footerText: 'Footer text'};

  render() {
    return html`
      ${headerTemplate(this.prop5.headerText)}
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <button ?disabled="${this.prop3}">button 2</button>
      <input type="text" .value="${this.prop4}" />
      <div><slot></slot></div>
      <div><slot name="one"></slot></div>
      ${footerTemplate(this.prop5.footerText)}
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
