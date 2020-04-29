import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const DialogButtons = (props) => {
  const { edit, handleDelete, handleDialogClose, handleSave } = props;
  return(
    <>
      <Button
          size="large"
          variant="outlined"
          onClick={handleDialogClose}
          color="primary"
        >
          Cancel
        </Button>
      {edit ? 
        <Button
          size="large"
          variant="outlined"
          onClick={handleDelete}
          color="primary"
        >
          Delete
        </Button> :
        null
      }
      <Button
        size="large"
        variant="outlined"
        onClick={handleSave}
        color="primary"
      >
        {edit ? 'Update' : 'Save'}
      </Button>
    </>
  )
}

export default DialogButtons;

DialogButtons.propTypes = {
  edit: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired

}