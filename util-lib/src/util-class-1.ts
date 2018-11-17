import { html, TemplateResult } from '@nutmeg/seed';

export class UtilClass1 {
    constructor() {}
    renderWebComponent (name: string): TemplateResult {
        return html`
          <div class="content">
            Welcome to &lt;hello-world-complex&gt;

            <ul>
              <li>name: ${name}</li>
            </ul>

            <slot></slot>
          </div>
        `;
    }
}
