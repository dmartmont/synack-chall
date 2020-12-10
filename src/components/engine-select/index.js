import { TextField } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const StyledSelect = styled(TextField)({
  minWidth: '160px'
});

function EngineSelect({ onChange, children, ...rest }) {
  return (
    <StyledSelect
      onChange={onChange}
      variant="outlined"
      select
      {...rest}
    >
      {children}
    </StyledSelect>
  )
} 

export default EngineSelect;