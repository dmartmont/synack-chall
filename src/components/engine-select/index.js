import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const StyledSelect = styled(TextField)({
  minWidth: '160px'
});

export default function EngineSelect({ onChange, options, ...rest }) {
  const engineOptions = options.map(({ value, text }) => (
    <MenuItem key={value} value={value}>{text}</MenuItem>
  ));

  return (
    <StyledSelect
      onChange={onChange}
      variant="outlined"
      select
      {...rest}
    >
      {engineOptions}
    </StyledSelect>
  )
} 

EngineSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string
};

EngineSelect.defaultProps = {
  onChange: () => null,
  options: [],
  value: ''
};
