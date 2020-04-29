import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const DialogHeader = (props) => {
  const { edit, handleDialogClose } = props;
  return(
      <div className='dialogHeader'>
        <Typography>{edit ? 'Update Course' : 'Add Course'}</Typography>
        <IconButton className='dialogCloseButon' onClick={handleDialogClose}>
          <CloseIcon />
        </IconButton>
      </div>
  )
}

export default DialogHeader;

DialogHeader.propTypes = {
  edit: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired
}