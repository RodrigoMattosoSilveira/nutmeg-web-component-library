export class UtilClass {
	constructor() {}
	
	static renderWebComponent (name: string): HTMLElement {
		console.log(`UtilClass::renderWebComponent name: name`);
		const ulEl = document.createElement('ul');
		const liEl = document.createElement('li');
		liEl.appendChild(document.createTextNode(name || 'No name'));
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
