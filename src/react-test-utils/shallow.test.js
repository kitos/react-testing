import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { NestedComponent, SubComponent } from '../components/NestedComponent';

describe ('NestedComponent' , () => {
  it('should only render one level deep', () => {
    //Arrange
    const renderer = ReactTestUtils.createRenderer();

    //Act
    renderer.render(<NestedComponent />);
    const result = renderer.getRenderOutput();

    //Assert
    expect(result.type).toBe('section');
    expect(result.props.children[0].type).toBe('span');
    expect(result.props.children[1]).toEqual(<SubComponent foo="bar" />);
  });
});
