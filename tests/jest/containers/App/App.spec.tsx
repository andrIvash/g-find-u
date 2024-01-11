import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../../src/containers/App';

describe('Hello component', () => {
  test('should render component properly', () => {
    // given
    // const dummyComponentProps = {
    //   bar: 'test',
    //   foo: 'lorem',
    // };

    // when
    const componentRenderer = renderer.create(<App />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});