import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Navigation from './components/Navigation';
import CourseDialog from './components/CourseDialog';
import {courseMutation, listCourses, listCourseLocation} from './utils/api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      edit: false,
      course: {
        name: '',
        date: '',
        description: '',
        rating: null,
        comments: '',
        courseLink: '',
        codeLink: '',
        creator: '',
        length: '',
        completed: false,
        courseLocation: null
      },
      courseCopy: {
        name: '',
        date: '',
        description: '',
        rating: null,
        comments: '',
        courseLink: '',
        codeLink: '',
        creator: '',
        length: '',
        completed: false,
        courseLocation: null
      }
    };
  };

  handleChange = async (property, value) =>  {
    let courseCopy = Object.assign({}, (this.state.edit ? this.state.course : this.state.courseCopy));
    courseCopy[property] = value;

    this.setState( {courseCopy});
  }

  handleSave = async () => {
    this.setState({
      course: this.state.courseCopy
    }
    // () => courseMutation(this.state.course)
    );
    this.setState({
      courseCopy: {
        name: '',
        date: '',
        description: '',
        rating: null,
        comments: '',
        courseLink: '',
        codeLink: '',
        creator: '',
        length: '',
        completed: false,
        courseLocation: null
      }
    })
  }

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false
    });
  }




  render() {
    return (
      <div className="App">
        <Navigation />
        <p>Click a button</p>
        <button onClick={listCourses}>GraphQl Query</button>
        <button onClick={courseMutation}>GraphQl Mutation</button>
        <CourseDialog 
          handleDialogClose={this.handleDialogClose}
          handleDialogOpen={this.handleDialogOpen}
          dialogOpen={this.state.dialogOpen}
          course={this.state.edit ? this.state.course : this.state.courseCopy}
          handleChange={this.handleChange}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
