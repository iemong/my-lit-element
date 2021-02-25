import { LitElement, html, customElement, property, css } from 'lit-element'

@customElement('my-input')
export class MyInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  @property({type: String})
  value = ''

  render() {
    return html`
        <p>current: ${ this.value }</p>
        <input type="text" @input="${this._onInput}">
    `
  }

  private _onInput(e:Event) {
      this.value = (e.target as HTMLInputElement)?.value
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-input': MyInput
  }
}
