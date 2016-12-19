import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
  it('should update label on change', () => {
    //Arrange
    const component = ReactTestUtils.renderIntoDocument(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    const checkbox = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
    const span = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'span');

    //Act
    ReactTestUtils.Simulate.change(checkbox);

    //Assert
    expect(span.textContent).toBe('On');
  });
});
