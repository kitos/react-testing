import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
  it('should update label on change', () => {
    //Act
    const component = ReactTestUtils.renderIntoDocument(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    const checkbox = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
    const span = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'span');

    //Assert
    ReactTestUtils.Simulate.change(checkbox);
    expect(span.textContent).toBe('On');
  });
});
