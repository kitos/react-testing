import React from 'react';
import renderer from 'react-test-renderer';

import MyComponent from './my-component';

it('should be rendered correctly', () => {
    const component = renderer.create(
        <MyComponent title="some title">some content</MyComponent>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});