import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
// import * as subscriptions from '../graphql/subscriptions'

export const courseCreate = async (course) => {
  console.log(course)
  const newCourse = await API.graphql(graphqlOperation(mutations.createCourse, {input: course}));
  return newCourse;
};
  
export const listCourses = async () => {
  const allCourses = await API.graphql(graphqlOperation(queries.listCourses));
  return allCourses.data.listCourses.items;
};

export const getCourseById = async (id) => {
  const course = await API.graphql(graphqlOperation(queries.getCourse, {id: id}));
  return course.data.getCourse
}

export const courseUpdate = async (course) => {
  const newCourse = await API.graphql(graphqlOperation(mutations.updateCourse, {input: course}));
  return newCourse;
};

export const deleteCourse = async (id) => {
  const deletedCourse = await API.graphql(graphqlOperation(mutations.deleteCourse, {input: id}));
  return deletedCourse;
}

// export const onCreate = async () => {
//     await API.graphql(graphqlOperation(subscriptions.onCreateCourse)).subscribe({
//         next: event => {
//           if (event){
//             console.log("Subscription: " + JSON.stringify(event.value.data, null, 2));
//           }
//         }
//       });
// }