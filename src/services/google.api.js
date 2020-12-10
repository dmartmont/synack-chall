import axios from 'axios';

import SearchResultFactory, { GOOGLE_TYPE } from './../factories/searchResult.factory';

const GOOGLE_URL = 'https://www.googleapis.com/customsearch/v1?';

export const googleSearch = (searchTerm) => {
  const params = new URLSearchParams();
  params.append('key', process.env.REACT_APP_GOOGLE_KEY);
  params.append('cx', process.env.REACT_APP_GOOGLE_ENGINE_ID);
  params.append('q', searchTerm);

  return axios.get(`${GOOGLE_URL}${params}`)
    .then(res =>
      res.data.items.map(SearchResultFactory.toSearchResult(GOOGLE_TYPE))
    );
}