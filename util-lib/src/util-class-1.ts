import { html, TemplateResult } from '@nutmeg/seed';

export class UtilClass1 {
    constructor() {}
    renderWebComponent (name: string): HTMLElement {
        let ulEl = document.createElement('ul');
        let liEl = document.createElement("li");
        liEl.appendChild(document.createTextNode(name || "No namessss"));
        ulEl.appendChild(liEl);

        // return html`
        //   <div class="content">
        //     Welcome to &lt;hello-world-complex&gt;
        //
        //     <ul>
        //       <li>name: ${name}</li>
        //     </ul>
        //
        //     <slot></slot>
        //   </div>
        // `;
        return ulEl;
    }
}
