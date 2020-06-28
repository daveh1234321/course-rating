import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextResponse from './ResponseTypes/TextResponse';
import TimeResponse from './ResponseTypes/TimeResponse';
import DateResponse from './ResponseTypes/DateResponse'
import DropdownResponse from './ResponseTypes/DropdownResponse';
import RadioResponse from './ResponseTypes/RadioResponse';
import DialogHeader from './DialogHeader';
import DialogButtons from './DialogButtons';

const CourseDialog = (props) => {
  const {
    handleDialogClose,
    handleSave,
    dialogOpen,
    course,
    edit,
    handleDelete,
    error
  } = props;

  const questions = [
    { dataValue: 'name', questionText: 'Title', type: 'TEXTFIELD'},
    { dataValue: 'description', questionText: 'Description', type: 'TEXTFIELD'},
    { dataValue: 'comments', questionText: 'Comments', type: 'TEXTFIELD'},
    { dataValue: 'codeLink', questionText: 'Link to Code', type: 'TEXTFIELD'},
    { dataValue: 'courseLink', questionText: 'Link to Course', type: 'TEXTFIELD'},
    { dataValue: 'creator', questionText: 'Course Creator', type: 'TEXTFIELD'},
    { dataValue: 'startDate', questionText: 'Course Start Date', type: 'DATE'},
    { dataValue: 'courseLocation', questionText: 'Course Location', type: 'DROPDOWN',  data: ['OREILLY', 'BOOK', 'PLURALSIGHT']},
    { dataValue: 'rating', questionText: 'Course Rating', type: 'DROPDOWN', data: ['1', '2', '3', '4', '5']},
    { dataValue: 'completed', questionText: 'Course Completed', type: 'RADIO', data: ['Yes', 'No']}
  ];

  return (
    <div>
      {dialogOpen && 
        <Dialog onClose={handleDialogClose} open={dialogOpen} maxWidth='sm' fullWidth={true}>
          <DialogTitle className='dialogTitle' onClose={handleDialogClose}>
            <DialogHeader edit={edit} handleDialogClose={handleDialogClose}/>
          </DialogTitle>                                
          <DialogContent className='dialogContent'>
            {questions.map(question => {
              switch(question.type) {
                case 'TEXTFIELD':
                  return (
                    <TextResponse 
                      error={error}
                      handleChange={props.handleChange}
                      questionText={question.questionText}
                      dataValue={question.dataValue}
                      response={course[question.dataValue]}
                    />
                  )
                case 'TIME': 
                  return (
                    <TimeResponse 
                      error={error}
                      handleChange={props.handleChange}
                      questionText={question.questionText}
                      dataValue={question.dataValue}
                      response={course[question.dataValue]}
                    />
                  )
                case 'DATE': 
                  return (
                    <DateResponse 
                      error={error}
                      handleChange={props.handleChange}
                      questionText={question.questionText}
                      dataValue={question.dataValue}
                      response={course[question.dataValue]}
                    />
                  )
                case 'DROPDOWN':
                  return (
                    <DropdownResponse 
                      error={error}
                      handleChange={props.handleChange}
                      questionText={question.questionText}
                      dataValue={question.dataValue}
                      response={course[question.dataValue]}
                      data={question.data}
                    />
                  )
                  case 'RADIO':
                    return (
                      <RadioResponse 
                        error={error}
                        handleChange={props.handleChange}
                        questionText={question.questionText}
                        dataValue={question.dataValue}
                        response={course[question.dataValue]}
                        data={question.data}
                      />
                    )
                default: return null
              }})}
          </DialogContent>
          <DialogActions className='dialogActions'>
            <DialogButtons
              edit={edit}
              handleDelete={handleDelete}
              handleDialogClose={handleDialogClose}
              handleSave={handleSave}
            />
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
    completed: PropTypes.string.isRequired,
    courseLocation: PropTypes.string
    }).isRequired,
  edit: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  error: PropTypes.shape({}).isRequired
}