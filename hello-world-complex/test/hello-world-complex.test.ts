import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { HelloWorldComplex } from '../src/hello-world-complex';

describe('<hello-world-complex>', () => {
  let component: HelloWorldComplex;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<hello-world-complex></hello-world-complex>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <hello-world-complex>');
    });
  });

  
  describe('name', () => {
    beforeEach(() => {
      component = fixture('<hello-world-complex name="Pickle"></hello-world-complex>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('name: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<hello-world-complex>slot content</hello-world-complex>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--hello-world-complex-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<hello-world-complex></hello-world-complex>');
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
              hello-world-complex.blue {
                --hello-world-complex-background-color: #03A9F4;
              }
            </style>
            <hello-world-complex class="blue"></hello-world-complex>
          </div>
        `).querySelector('hello-world-complex') as HelloWorldComplex;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): HelloWorldComplex {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HelloWorldComplex;
}
