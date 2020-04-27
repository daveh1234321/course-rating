import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Navigation from './components/Navigation'
// import CourseDialog from './components/CourseDialog'
import { CoursesTable } from './components/CoursesTable'
import { withAuthenticator } from 'aws-amplify-react';
import * as api from './utils/api';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import validation from './utils/util';
import moment from 'moment';

const CourseDialog = lazy(() => import('./components/CourseDialog'))
// const CoursesTable = lazy(()=> import('./components/CoursesTable'));

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
      },
      error: {}
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
    let courseCopy;
    if (this.state.courseCopy.date === '' || this.state.courseCopy.length === '') {
      courseCopy = Object.assign({}, (this.state.courseCopy));
      if (this.state.courseCopy.date === '') {
        courseCopy['date'] = moment().format('DD/MM/YYYY');
      }
      if (this.state.courseCopy.length === '') {
        courseCopy['length'] = moment('00:00', 'HH:mm').format('HH:mm');
      }
      this.setState( {courseCopy});
    } 
    const error = validation(courseCopy || this.state.courseCopy)
    if (Object.keys(error).length === 0) {
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
    } else {
      this.setState({
        error: error
      })
    }
  }

  handleDelete = async () => {
    api.deleteCourse({ id: this.state.courseCopy.id })
      .then(this.getCourses())
      .finally(this.handleDialogClose());
  }


  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
      edit: false,
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
      },
      error: {}
    });
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
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
          error={this.state.error}
        />
        <Fab
          className='addCourseButton'
          onClick={this.handleDialogOpen}
          color="secondary"
          style={{
            position: 'absolute',
            bottom: '2%'
          }}
        >
          <AddIcon />
        </Fab>
        </Suspense>
      </div>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true
});
