import { render, fireEvent } from '@testing-library/react';	

import { ENGINE_OPTIONS } from '../../constants/engines';
import ResultsList from './index';

const RESULTS = [{
  snippet: 'This is the snippet of the result',
  title: 'Title of the result',
  url: 'https://www.thisisanurl.com',
  showUrl: 'thisisanurl.com'
}];

test('<ResultsList /> renders', () => {	
  const { getByRole } = render(
    <ResultsList results={RESULTS} />
  );	

  const itemLink = getByRole('link');

  expect(itemLink.textContent).toBe(RESULTS[0]['title']);
  expect(itemLink.href).toBe(`${RESULTS[0]['url']}/`);
});
