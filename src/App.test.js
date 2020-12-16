import { render, screen } from '@testing-library/react';	
import { Provider } from 'react-redux';

import store from './store';
import App from './App';	

test('renders app correctly', () => {	
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );	
  const textElem = screen.getByText(/Google & Bing Search Aggregator/i);	
  expect(textElem).toBeInTheDocument();	
});