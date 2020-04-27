import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const RadioResponse = (props) => {
  const { error, questionText, dataValue, data, response } = props;
  return(
    <FormControl
      style={{ margin: '1%' }}
      error={error.hasOwnProperty(dataValue)}
    >
      <FormLabel>{questionText}</FormLabel>
        <RadioGroup style={{ display: 'inline-block' }} value={response} onChange={(event) => props.handleChange(dataValue, event.target.value)}>
          {data.map(option => (
            <FormControlLabel key ={option} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
        <FormHelperText>{error[dataValue]}</FormHelperText>
    </FormControl>
  )
}

export default RadioResponse;

RadioResponse.propTypes = {
  error: PropTypes.shape({}).isRequired,
  questionText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  data: PropTypes.arrayOf().isRequired,
  response: PropTypes.string.isRequired
}