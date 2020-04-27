import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker} from '@material-ui/pickers';
import moment from 'moment';

const DateResponse = (props) => {
  const { error, questionText, dataValue, response } = props;
  return(
    <DatePicker
      required
      color="secondary"
      fullWidth
      style={{ margin: '1%' }}
      disableToolbar
      variant="outlined"
      label={questionText}
      error={error.hasOwnProperty(dataValue)}
      format='DD/MM/YYYY'
      helperText={error[dataValue]}
      value={moment(response || moment().format('DD/MM/YYYY'), 'DD/MM/YYYY')}
      onChange={(date) => {
        props.handleChange(dataValue, moment(date).format('DD/MM/YYYY'))
      }}
    />
  )
}

export default DateResponse;

DateResponse.propTypes = {
  error: PropTypes.shape({}).isRequired,
  questionText: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired

}