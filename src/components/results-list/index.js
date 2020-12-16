import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Link, Typography  } from '@material-ui/core';

import useStyles from './results-list.styles';

function ResultsList({ results, ...rest }) {
  const styles = useStyles();

  const resultItems = results.map(({ snippet, title, url, showUrl }) => (
    <li key={uniqueId()} className={styles.itemContainer}>
      <Typography variant="h6">
        <Link href={url} target="_blank" rel="noopener">{title}</Link>
      </Typography>
      <Typography variant="caption">{showUrl}</Typography>
      <Typography variant="body2">{snippet}</Typography>
    </li>
  ));

  return (
    <ul className={styles.container}>
      {resultItems}
    </ul>
  )
} 

ResultsList.propTypes = {
  results: PropTypes.array
};

ResultsList.defaultProps = {
  results: []
};

export default ResultsList;