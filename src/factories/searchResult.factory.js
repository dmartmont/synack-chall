export const GOOGLE_TYPE = 'google';
export const BING_TYPE = 'bing';

export default class SearchResultFactory {
  static toSearchResult(type) {
    return function(result) {
      switch (type) {
        case GOOGLE_TYPE:
          return SearchResultFactory.googleToSearchResult(result);
        case BING_TYPE:
          return SearchResultFactory.bingToSearchResult(result);
        default:
          return result;
      }
    }
  }

  static bingToSearchResult(result) {
    return {
      title: result.name,
      showUrl: result.displayUrl,
      url: result.url,
      snippet: result.snippet
    }
  }

  static googleToSearchResult(result) {
    return {
      title: result.title,
      showUrl: result.displayLink,
      url: result.link,
      snippet: result.snippet
    }
  }
}