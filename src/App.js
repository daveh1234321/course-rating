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
import { CoursesTable } from './components/CoursesTable';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

  getCourseById = async (id) => {
    let course = await api.getCourseById(id);
    this.setState({
      courseCopy: course,
      edit: true
    }, () => this.handleDialogOpen())
  };

  // subscribeCourses = async () => {
  //   await api.onCreate();
  // }

  getCourses = async () => {
    let courses = await api.listCourses();
    this.setState({
      courses
    })
  }

  handleChange = async (property, value) =>  {
    let courseCopy = Object.assign({}, (this.state.courseCopy));
    courseCopy[property] = value;

    this.setState( {courseCopy});
  }

  handleSave = async () => {
    this.setState({
      course: this.state.courseCopy
    },
    () => {
      this.state.edit ?
       api.courseUpdate(this.state.course)
        .then(this.getCourses())
        .finally(this.handleDialogClose()):
      api.courseCreate(this.state.course)
        .then(this.getCourses())
        .finally(this.handleDialogClose())
    });
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
    });
  }

  handleDelete = async () => {
    api.deleteCourse({ id: this.state.courseCopy.id })
      .then(this.getCourses())
      .finally(this.handleDialogClose());
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
    });
  }


  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
      edit: false
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <CoursesTable
            data={this.state.courses}
            getCourseById={this.getCourseById}
          />
          <CourseDialog 
            handleDialogClose={this.handleDialogClose}
            handleDialogOpen={this.handleDialogOpen}
            dialogOpen={this.state.dialogOpen}
            course={this.state.courseCopy}
            handleChange={this.handleChange}
            handleSave={this.handleSave}
            edit={this.state.edit}
            handleDelete={this.handleDelete}
          />
          <Fab
            color="primary"
            onClick={this.handleDialogOpen}
            style={{
              position: 'absolute',
              bottom: '2%'
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true
});
