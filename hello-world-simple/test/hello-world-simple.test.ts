import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { HelloWorldSimple } from '../src/hello-world-simple';

describe('<hello-world-simple>', () => {
  let component: HelloWorldSimple;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<hello-world-simple></hello-world-simple>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <hello-world-simple>');
    });
  });

  
  describe('name', () => {
    beforeEach(() => {
      component = fixture('<hello-world-simple name="Pickle"></hello-world-simple>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('name: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<hello-world-simple>slot content</hello-world-simple>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--hello-world-simple-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<hello-world-simple></hello-world-simple>');
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
              hello-world-simple.blue {
                --hello-world-simple-background-color: #03A9F4;
              }
            </style>
            <hello-world-simple class="blue"></hello-world-simple>
          </div>
        `).querySelector('hello-world-simple') as HelloWorldSimple;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): HelloWorldSimple {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HelloWorldSimple;
}
