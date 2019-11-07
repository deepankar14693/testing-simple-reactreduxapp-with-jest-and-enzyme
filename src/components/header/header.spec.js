import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  // console.log(component.debug());
  return component;
}

describe('Header component', () => {

  let component;

  beforeEach(() => {
    component = setUp();
  })

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logoComponent');
    expect(logo.length).toBe(1);
  });

})
