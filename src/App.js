import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Container, Typography } from '@material-ui/core';

import { fetchSearchResults } from './store/slices/search-result.slice';
import { ENGINE_OPTIONS } from './constants/engines';

import EngineSelect from './components/engine-select';
import SearchBar from './components/search-bar';
import ResultsList from './components/results-list';
import useStyles from './App.styles';

function App() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [engine, setEngine] = useState('google');
  const { results, isLoading } = useSelector(state => state.searchResult);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleEngineChange = (e) => {
    setEngine(e.target.value);
  }

  const handleSearchSubmit = () => {
    const enginesToUse = engine !== 'both' ? [engine] : ['google', 'bing'];
    dispatch(fetchSearchResults(search, enginesToUse));
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3">
        Google & Bing Search Aggregator
      </Typography>
      <div className={styles.searchContainer}>
        <EngineSelect
          id="search-engines"
          label="Search Engine"
          onChange={handleEngineChange}
          options={ENGINE_OPTIONS}
          value={engine}
        />
        <SearchBar
          className={styles.searchBar}
          value={search}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
          placeholder="Search term"
        />
      </div>
      <div className={styles.resultsContainer}>
        {isLoading ? (
            <div className={styles.loaderContainer}>
              <CircularProgress />
            </div>
          ) : (
            <ResultsList results={results} />
          )
        }
      </div>
    </Container>
  );
}

export default App;
