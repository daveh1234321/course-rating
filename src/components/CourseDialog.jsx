import React from 'react';
import { Button, Dialog, DialogTitle, TextField, DialogContent, DialogActions } from '@material-ui/core';
import { KeyboardTimePicker, DatePicker } from "@material-ui/pickers"
import PropTypes from 'prop-types';
import moment from 'moment'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const CourseDialog = (props) => {
  const {
    handleDialogClose,
    handleSave,
    dialogOpen,
    course,
    edit,
    handleDelete
  } = props;
  const {
    name,
    date,
    description,
    rating,
    comments,
    courseLink,
    codeLink,
    creator,
    length,
    completed,
    courseLocation
  } = course;

  const validation = (text) => {
    return text.length > 0 ? false : true;
  };

  const locations = ['OREILLY', 'BOOK', 'PLURALSIGHT'];

  const ratings = ['1', '2', '3', '4', '5'];

  const completedOptions = ['Yes', 'No'];

  return (
    <div>
      {dialogOpen && 
        <Dialog onClose={handleDialogClose} open={dialogOpen} maxWidth='sm' fullWidth='true'>
          <DialogTitle onClose={handleDialogClose} style={{ padding: '3% 5% 3% 5%' }}>
            <div style={{ display:'inline-flex', alignItems: 'center'}}>
              <Typography>{edit ? 'Update Course' : 'Add Course'}</Typography>
              <IconButton onClick={handleDialogClose} style={{ right: '-320%', paddingTop: '0%' }}>
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>                                
          <DialogContent style={{ padding: '0% 5% 0% 5%', display: 'grid' }}>
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(name)}
              required
              label='Title'
              variant='outlined'
              value={name}
              onChange={(event) => props.handleChange('name',event.target.value)}
            />
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(description)}
              required
              label='Description'
              variant='outlined'
              value={description}
              onChange={(event) => props.handleChange('description',event.target.value)}
            />
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(comments)}
              required
              label='Comments'
              variant='outlined'
              value={comments}
              onChange={(event) => props.handleChange('comments',event.target.value)}
            />
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(codeLink)}
              required
              label='Link to code'
              variant='outlined'
              value={codeLink}
              onChange={(event) => props.handleChange('codeLink',event.target.value)}
            />
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(courseLink)}
              required
              label='Link to course'
              variant='outlined'
              value={courseLink}
              onChange={(event) => props.handleChange('courseLink',event.target.value)}
            />
            <TextField
              fullWidth
              style={{ margin: '1%' }}
              error={validation(creator)}
              required
              label='Course creator'
              variant='outlined'
              value={creator}
              onChange={(event) => props.handleChange('creator',event.target.value)}
            />
            <KeyboardTimePicker
              fullWidth
              variant="outlined"
              style={{ margin: '1%' }}
              error={moment(length) === ('' || '00:00')}
              required
              clearable
              ampm={false}
              label="Length"
              format='HH:mm'
              value={moment(length || '00:00', 'HH:mm')}
              onChange={(event) => props.handleChange('length',event.format('HH:mm'))}
            />
            <DatePicker
              fullWidth
              style={{ margin: '1%' }}
              disableToolbar
              variant="outlined"
              label="Date"
              format="DD/MM/YYYY"
              error={moment(date) === ('')}
              value={moment(date || moment(), 'DD/MM/YYYY')}
              onChange={(moment) => props.handleChange('date', moment.format('DD/MM/YYYY'))}
            />
            <FormControl fullWidth variant="outlined" style={{ margin: '1%' }}>
              <InputLabel>Course Location</InputLabel>
              <Select
                value={courseLocation || ''}
                onChange={(event) => props.handleChange('courseLocation', event.target.value)}
              >
                {locations.map(location => (
                    <MenuItem key={location} value={location}>{location}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" style={{ margin: '1%' }}>
              <InputLabel>Course Location</InputLabel>
              <Select
                value={rating || ''}
                onChange={(event) => props.handleChange('rating', event.target.value)}
              >
                {ratings.map(rating => (
                    <MenuItem key={rating} value={rating}>{rating}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl style={{ margin: '1%' }}>
              <FormLabel>Course completed</FormLabel>
                <RadioGroup style={{ display: 'inline-block' }} value={completed} onChange={(event) => props.handleChange('completed', event.target.value)}>
                  {completedOptions.map(option => (
                      <FormControlLabel key ={option} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            {edit ? 
              <Button onClick={handleDelete} color="primary">
                Delete
              </Button> :
              null
            }
            <Button onClick={handleSave} color="primary">
              {edit ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      }
    </div>
  )
}

export default CourseDialog;

CourseDialog.propTypes = {
  handleDialogClose: PropTypes.func.isRequired,
  handleDialogOpen: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string,
    comments: PropTypes.string.isRequired,
    courseLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    courseLocation: PropTypes.string
    }).isRequired,
  edit: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired
}