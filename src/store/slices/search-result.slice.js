import { createSlice } from '@reduxjs/toolkit';
import { flatten } from 'lodash';

import { googleSearch } from '../../services/google.api';
import { bingSearch } from '../../services/bing.api';

const INITIAL_STATE = {
  results: [],
  isLoading: false,
  error: null
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState: INITIAL_STATE,
  reducers: {
    getSearchStart(state) {
      state.isLoading = true;
    },
    getSearchSuccess(state, action) {
      state.isLoading = false;
      state.results = action.payload;
    },
    getSearchFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {
  getSearchStart,
  getSearchSuccess,
  getSearchFailure
} = searchResultSlice.actions;

const engineFunctionMapper = {
  'google': googleSearch,
  'bing': bingSearch
};

export const fetchSearchResults = (searchTerm, engines) => async dispatch => {
  dispatch(getSearchStart());
  const searches = engines.map(async engine => {
    return await engineFunctionMapper[engine](searchTerm)
  });
  Promise.all(searches).then(
    res => {
      dispatch(getSearchSuccess(flatten(res)));
    },
    err => {
      dispatch(getSearchFailure(err.message));
    });
}

export default searchResultSlice.reducer;