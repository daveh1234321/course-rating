import React from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';
import moment from 'moment';
import PropTypes from 'prop-types';

const TimeResponse = (props) => {
  const { error, questionText, dataValue, response } = props;
  return (
    <KeyboardTimePicker
      fullWidth
      variant="outlined"
      style={{ margin: '1%' }}
      required
      clearable
      ampm={false}
      label={questionText}
      error={error.hasOwnProperty(dataValue)}
      helperText={error[dataValue]}
      value={moment(response || moment('00:00', 'HH:mm'), 'HH:mm')}
      onChange={(time) => {
        props.handleChange(dataValue,moment(time).format('HH:mm'))
      }}
    />
  )
}

export default TimeResponse;

TimeResponse.propTypes = {
  error: PropTypes.shape({}).isRequired,
  questionText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired
}