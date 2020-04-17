import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Navigation from './components/Navigation';
import CourseDialog from './components/CourseDialog';
import * as api from './utils/api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
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
        completed: '',
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
        completed: '',
        courseLocation: null
      }
    };
  };

  async componentDidMount() {
    this.getCourses();
  }

  getCourses = async () => {
    let courses = await api.listCourses();
    console.log(courses);
    this.setState({
      courses
    })
  }

  handleChange = async (property, value) =>  {
    let courseCopy = Object.assign({}, (this.state.edit ? this.state.course : this.state.courseCopy));
    courseCopy[property] = value;

    this.setState( {courseCopy});
  }

  handleSave = async () => {
    this.setState({
      course: this.state.courseCopy
    },
    () => {
      console.log(this.state.courseCopy)
      console.log(this.state.course)
      api.courseMutation(this.state.course)
    }
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
        completed: '',
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
      <Router>
        <div className="App">
          <Navigation />
          <button onClick={api.listCourses}>GraphQL Query</button>
          <CourseDialog 
            handleDialogClose={this.handleDialogClose}
            handleDialogOpen={this.handleDialogOpen}
            dialogOpen={this.state.dialogOpen}
            course={this.state.edit ? this.state.course : this.state.courseCopy}
            handleChange={this.handleChange}
            handleSave={this.handleSave}
          />
        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);
