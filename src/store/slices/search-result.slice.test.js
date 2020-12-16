import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  engineFunctionMapper,
  getSearchStart,
  getSearchSuccess,
  fetchSearchResults,
  INITIAL_STATE
} from './search-result.slice';
import { DESIRED_RESULT, DESIRED_RESULT_ARR } from '../../constants/tests';

engineFunctionMapper.google = jest.fn().mockResolvedValue(DESIRED_RESULT_ARR);
engineFunctionMapper.bing = jest.fn().mockImplementation(DESIRED_RESULT_ARR);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('create the searchResults actions correctly ', () => {
  const expectedActions = [
    { type: getSearchStart.toString(), payload: undefined },
    { type: getSearchSuccess.toString(), payload: DESIRED_RESULT_ARR }
  ]

  const store = mockStore(INITIAL_STATE);

  return store.dispatch(fetchSearchResults('', ['google'])).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  })
});
