import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const DropdownResponse = (props) => {
  const { error, questionText, dataValue, data, response } = props;
  return (
    <FormControl
      fullWidth
      variant="outlined"
      style={{ margin: '1%' }}
      error={error.hasOwnProperty(dataValue)}
    >
      <InputLabel>{questionText}</InputLabel>
      <Select
        value={response || ''}
        onChange={(event) => props.handleChange(dataValue, event.target.value)}
      >
        {data.map(items => (
            <MenuItem key={items} value={items}>{items}</MenuItem>
        ))}
      </Select>
        <FormHelperText>{error[dataValue]}</FormHelperText>
    </FormControl>
  )
}

export default DropdownResponse;

DropdownResponse.propTypes = {
  error: PropTypes.shape({}).isRequired,
  questionText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  data: PropTypes.arrayOf().isRequired,
  response: PropTypes.string.isRequired

}