import { Seed, property, html, TemplateResult } from '@nutmeg/seed';
import { UtilClass1 } from '../../util-lib/src/util-class-1';

export class HelloWorldComplex extends Seed {
  @property() public name: string = '';

  utilClass1: UtilClass1;

  constructor() {
    super();
    this.utilClass1 = new UtilClass1();
  }

  /** The component instance has been inserted into the DOM. */
  public connectedCallback() {
    super.connectedCallback();
  }

  /** The component instance has been removed from the DOM. */
  public disconnectedCallback() {
    super.disconnectedCallback();
  }

  /** Watch for changes to these attributes. */
  public static get observedAttributes(): string[] {
    return super.observedAttributes;
  }

  /** Rerender when the observed attributes change. */
  public attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  /** Styling for the component. */
  public get styles(): TemplateResult {
    return html`
      <style>
        :host {
          border: 1px solid #000000;
          border-radius: 8px;
        }

        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        }

        .content {
          background-color: var(--hello-world-complex-background-color, #FFFFFF);
          color: #000000;
          padding: 16px;
        }
      </style>
    `;
  }

  /** HTML Template for the component. */
  public get template(): TemplateResult {
    return this.utilClass1.renderWebComponent(this.name) ;
  }
}

window.customElements.define('hello-world-complex', HelloWorldComplex);
