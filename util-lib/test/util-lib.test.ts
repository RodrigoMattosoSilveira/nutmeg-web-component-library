import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { UtilLib } from '../src/util-lib';

describe('<util-lib>', () => {
  let component: UtilLib;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<util-lib></util-lib>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <util-lib>');
    });
  });

  

  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<util-lib>slot content</util-lib>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--util-lib-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<util-lib></util-lib>');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(255, 255, 255)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture(`
          <div>
            <style>
              util-lib.blue {
                --util-lib-background-color: #03A9F4;
              }
            </style>
            <util-lib class="blue"></util-lib>
          </div>
        `).querySelector('util-lib') as UtilLib;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): UtilLib {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as UtilLib;
}
