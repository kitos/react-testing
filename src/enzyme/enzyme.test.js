import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

describe('<CheckboxWithLabel />', () => {
  it('should update label on change', () => {
    //Arrange
    const component = shallow(<CheckboxWithLabel labelOff="Off" labelOn="On" />);
    expect(component.find('span').text()).toBe('Off');

    //Act
    const checkbox = component.find('input');
    checkbox.simulate('change');

    //Assert
    expect(component.find('span').text()).toBe('On');
  });
});
