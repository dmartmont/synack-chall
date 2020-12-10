import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress, Container,MenuItem } from '@material-ui/core';

import { fetchSearchResults } from './store/slices/search-result.slice';

import EngineSelect from './components/engine-select';
import SearchBar from './components/search-bar';
import ResultsList from './components/results-list';
import useStyles from './App.styles';

const ENGINE_OPTIONS = [
  { value: 'google', text: 'Google' },
  { value: 'bing', text: 'Bing' },
  { value: 'both', text: 'Both' },
]

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

  const engineOptions = ENGINE_OPTIONS.map(({ value, text }) => (
    <MenuItem key={value} value={value}>{text}</MenuItem>
  ));

  return (
    <Container maxWidth="md">
      <div className={styles.searchContainer}>
        <EngineSelect
          id="search-engines"
          label="Search Engine"
          onChange={handleEngineChange}
          value={engine}
        >
          {engineOptions}
        </EngineSelect>
        <SearchBar
          className={styles.searchBar}
          value={search}
          onChange={handleSearchChange}
          onSubmit={handleSearchSubmit}
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
