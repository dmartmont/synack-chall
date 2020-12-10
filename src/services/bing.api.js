import axios from 'axios';

import SearchResultFactory, { BING_TYPE } from './../factories/searchResult.factory';

const BING_URL = 'https://api.bing.microsoft.com/v7.0/search?';

export const bingSearch = (searchTerm) => {
  const headers = {
    'Ocp-Apim-Subscription-Key': process.env.REACT_APP_BING_KEY
  };

  const params = new URLSearchParams();
  params.append('q', searchTerm);

  return axios.get(BING_URL, { params, headers })
    .then(res =>
      res.data.webPages.value.map(SearchResultFactory.toSearchResult(BING_TYPE))
    );
}