import * as plexis from '../src/index';

it('allows using all the available utilities', () => {
  expect(Object.keys(plexis)).toMatchSnapshot();
});
