import { combineReducers } from '@reduxjs/toolkit';
import searchResultReducer from './search-result.slice';

export default combineReducers({
  searchResult: searchResultReducer
});