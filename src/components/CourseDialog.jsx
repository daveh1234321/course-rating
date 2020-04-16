import React from 'react';
import { Button, Dialog, DialogTitle, TextField, DialogContent, DialogActions } from '@material-ui/core';
import { TimePicker, DatePicker } from "@material-ui/pickers"
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
const CourseDialog = (props) => {
    const {
        handleDialogClose,
        handleDialogOpen,
        handleSave,
        dialogOpen,
        course
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
            <button onClick={handleDialogOpen}>Create Course</button>
            {dialogOpen && 
                <Dialog onClose={handleDialogClose} open={dialogOpen}>
                    <DialogTitle>Add a course</DialogTitle>
                    <DialogContent>
                        <TextField
                            error={validation(name)}
                            required
                            label='Title'
                            variant='outlined'
                            value={name}
                            onChange={(event) => props.handleChange('name',event.target.value)}
                        />
                        <TextField
                            error={validation(description)}
                            required
                            label='Description'
                            variant='outlined'
                            value={description}
                            onChange={(event) => props.handleChange('description',event.target.value)}
                        />
                        <TextField
                            error={validation(comments)}
                            required
                            label='Comments'
                            variant='outlined'
                            value={comments}
                            onChange={(event) => props.handleChange('comments',event.target.value)}
                        />
                        <TextField
                            error={validation(codeLink)}
                            required
                            label='Link to code'
                            variant='outlined'
                            value={codeLink}
                            onChange={(event) => props.handleChange('codeLink',event.target.value)}
                        />
                        <TextField
                            error={validation(courseLink)}
                            required
                            label='Link to course'
                            variant='outlined'
                            value={courseLink}
                            onChange={(event) => props.handleChange('courseLink',event.target.value)}
                        />
                        <TextField
                            error={validation(creator)}
                            required
                            label='Course creator'
                            variant='outlined'
                            value={creator}
                            onChange={(event) => props.handleChange('creator',event.target.value)}
                        />
                        <TimePicker
                            error={moment(length) === '00:00'}
                            required
                            clearable
                            ampm={false}
                            label="Length"
                            value={moment(length || '00:00', 'HH:mm')}
                            onChange={(moment) => props.handleChange('length',moment.format('HH:mm'))}
                        />
                        <DatePicker
                            disableToolbar
                            variant="inline"
                            label="Date"
                            format="DD/MM/YYYY"
                            value={moment(date || moment(), 'DD/MM/YYYY')}
                            onChange={(moment) => props.handleChange('date', 'DD/MM/YYYY')}
                        />
                        <FormControl>
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
                        <FormControl>
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
                        <FormControl>
                            <FormLabel>Course completed</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={completed} onChange={(event) => props.handleChange('completed', event.target.value)}>
                                {completedOptions.map(option => (
                                    <FormControlLabel value={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleDialogClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Save
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
        completed: PropTypes.bool.isRequired,
        courseLocation: PropTypes.string
      }).isRequired
}