import { render } from '@testing-library/react';	

import { ENGINE_OPTIONS } from '../../constants/engines';
import EngineSelect from './index';

test('<EngineSelect /> renders', () => {	
  const { getByRole } = render(
    <EngineSelect value='google' options={ENGINE_OPTIONS} />
  );	

  expect(getByRole('button').textContent).toBe('Google');
});
