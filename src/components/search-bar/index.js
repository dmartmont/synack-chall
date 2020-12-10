import { IconButton, InputAdornment, TextField, withStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const styles = {};

function SearchBar({ onChange, onSubmit, children, ...rest }) {
  return (
    <TextField
      onChange={onChange}
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

export default withStyles(styles)(SearchBar);