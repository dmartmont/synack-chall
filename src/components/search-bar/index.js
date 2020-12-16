import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField, withStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const styles = {};

function SearchBar({ onSubmit, ...rest }) {
  return (
    <TextField
      variant="outlined"
      InputProps={{
        endAdornment: 
          <InputAdornment position="end">
            <IconButton
              onClick={onSubmit}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
      }}
      fullWidth
      {...rest}
    />
  )
} 

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  onSubmit: () => null
};



export default withStyles(styles)(SearchBar);