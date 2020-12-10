import { Link, Typography  } from '@material-ui/core';
import { uniqueId } from 'lodash';

import useStyles from './results-list.styles';

function ResultsList({ results, ...rest }) {
  const styles = useStyles();

  const resultItems = results.map(result => (
    <li key={uniqueId()} className={styles.itemContainer}>
      <Typography variant="h6">
        <Link href={result.url} target="_blank" rel="noopener">{result.title}</Link>
      </Typography>
      <Typography variant="caption">{result.showUrl}</Typography>
      <Typography variant="body2">{result.snippet}</Typography>
    </li>
  ));

  return (
    <ul className={styles.container}>
      {resultItems}
    </ul>
  )
} 

export default ResultsList;