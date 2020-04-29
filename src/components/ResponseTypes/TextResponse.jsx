import React from 'react';
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types';

const TextResponse = (props) => {
  const { error, questionText, dataValue, response } = props;
  return(
    <TextField
      className='response'
      fullWidth
      required
      label={questionText}
      variant='outlined'
      error={error.hasOwnProperty(dataValue)}
      helperText={error[dataValue]}
      value={response}
      onChange={(event) => props.handleChange(dataValue, event.target.value)}
    />
  )
}

export default TextResponse;

TextField.propTypes = {
  error: PropTypes.shape({}).isRequired,
  questionText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired
}