import renderer from 'react-test-renderer';
import Quote from './Quotes';

describe('<Quote />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
