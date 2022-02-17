import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home page', () => {
  test('match snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render component', () => {
    render(<Home />);
  });

  test('render h2', () => {
    const h2 = 'Welcome to our page!';
    const HomeContent = render(<Home />);

    HomeContent.getByText(h2);
  });

  test('render first paragraph', () => {
    const firstPar = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque porttitor quam eget auctor. Quisque sodales diam ac nibh auctor, eu facilisis tellus consequat. Sed placerat enim nunc, non ultrices nibh dictum vitae. Fusce a tortor dictum nibh tincidunt elementum sit amet eu elit. Nunc in imperdiet augue, et ultrices mauris. Maecenas massa orci, molestie vel lectus eu, vulputate fermentum nulla.';

    const HomeContent = render(<Home />);

    HomeContent.getByText(firstPar);
  });

  test('render second paragraph', () => {
    const secondPar = 'Aliquam pharetra hendrerit efficitur. Cras interdum lectus eueros placerat hendrerit. Nulla vulputate, lectus mollis pulvinar aliquet, lorem tellus faucibus quam, sed vehicula magna massa nec nulla. Nunc rutrum mauris eget est pretium, vitae aliquet dolor aliquet. Mauris porttitor elit mauris, eget tincidunt ante pellentesque ac. Maecenas eu consectetur mauris, quis vehicula dolor. Aliquam erat volutpat. Investibulum ligula quis mauris convallis dictum. Integer fermentum lectus tortor, eget rhoncus mauris imperdiet ac.';

    const HomeContent = render(<Home />);

    HomeContent.getByText(secondPar);
  });
});
