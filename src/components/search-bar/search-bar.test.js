import { render, fireEvent } from '@testing-library/react';	

import SearchBar from './index';

const onSubmitFn = jest.fn(() => null);

test('<SearchBar /> renders', () => {	
  const { getByRole } = render(
    <SearchBar placeholder="Search term" />
  );	

  expect(getByRole('textbox').getAttribute('placeholder')).toBe('Search term');
});

test('<SearchBar /> correctly fires onSubmit', () => {	
  const { getByRole } = render(
    <SearchBar onSubmit={onSubmitFn}/>
  );	

  fireEvent.click(getByRole('button'));

  expect(onSubmitFn).toBeCalledTimes(1);
});
