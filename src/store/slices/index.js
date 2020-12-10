import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './search.slice';
import searchResultReducer from './search-result.slice';

export default combineReducers({
  search: searchReducer,
  searchResult: searchResultReducer
});