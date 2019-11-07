import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline component', () => {

  describe('checking prop types', () => {

    it('should not throw warning', () => {
      const expectedProps = {
        header: 'testing props',
        desc: 'just to test',
        tempArray: [{
          fName: 'testing fName',
          lName: 'testing lName',
          age: 26,
          onlineStatus: true
        }]
      }

      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    })

  })

  describe('have props', () => {

    let component;
    beforeEach(() => {
      const props = {
        header: 'TEST 1',
        desc: 'testing with props'
      }
      component = setUp(props);
    });

    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(1)
    });

    it('should render h1', () => {
      const wrapper = findByTestAttr(component, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('should render description', () => {
      const wrapper = findByTestAttr(component, 'description');
      expect(wrapper.length).toBe(1);
    });

  });

  describe('have no props', () => {

    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('should not render', () => {
      const wrapper = findByTestAttr(component, 'headlineComponent');
      expect(wrapper.length).toBe(0)
    });

  });

})
