import SearchResultFactory, { GOOGLE_TYPE, BING_TYPE } from './searchResult.factory';
import { GOOGLE_RESULT, BING_RESULT, DESIRED_RESULT } from '../constants/tests';


test('searchResultFactory turn Google result into searchResult', () => {
  const searchResult = SearchResultFactory.toSearchResult(GOOGLE_TYPE)(GOOGLE_RESULT);

  expect(searchResult).toMatchObject(DESIRED_RESULT);
});

test('searchResultFactory turn Bing result into searchResult', () => {
  const searchResult = SearchResultFactory.toSearchResult(BING_TYPE)(BING_RESULT);

  expect(searchResult).toMatchObject(DESIRED_RESULT);
});