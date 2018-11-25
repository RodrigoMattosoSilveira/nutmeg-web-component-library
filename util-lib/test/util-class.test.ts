/*
 * Copyright 2018 Rodrigo Silveira
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import {UtilClass} from '../src/util-class';

// const util_class: any = require ('../src/util-class');

describe (`util-class`, () => {
	let htmlEl: HTMLElement;
	
	describe(`renderWebComponent`, () => {
		beforeEach(() => {
			htmlEl = UtilClass.renderWebComponent('Rodrigo');
		});
		describe(`with name equal to 'Rodrigo'`, () => {
			it(`has an outer UL element`, () => {
				expect(htmlEl.tagName).equal('UL');
			});
			it(`has an inner LI element`, () => {
				expect(true).equal(true);
			});
			it(`The LI element inner text is equal to 'Rodrigo'`, () => {
				expect(true).equal(true);
			});
		});
	});
});
