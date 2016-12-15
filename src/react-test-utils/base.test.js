import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

describe('CheckboxWithLabel', () => {
  it('should display labelOff by default', () => {
    //Arrange
    const renderer = ReactTestUtils.createRenderer();

    //Act
    renderer.render(<CheckboxWithLabel labelOff="Off" labelOn="On" />);
    const result = renderer.getRenderOutput();

    //Assert
    expect(result.type).toBe('label');
    const span = result.props.children[1];
    expect(span.props.children).toEqual('Off');
  });
});
