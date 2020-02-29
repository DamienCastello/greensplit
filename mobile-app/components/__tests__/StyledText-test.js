import * as React from 'react';
import renderer from 'react-test-renderer';

import { RobotoText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<RobotoText>Snapshot test!</RobotoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
