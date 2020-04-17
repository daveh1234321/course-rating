import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export const courseMutation = async (course) => {
    console.log(course);
    const newCourse = await API.graphql(graphqlOperation(mutations.createCourse, {input: course}));
    alert(JSON.stringify(newCourse));
    return newCourse;
};
  
  
export const listCourses = async () => {
    const allCourses = await API.graphql(graphqlOperation(queries.listCourses));
    alert(JSON.stringify(allCourses.data.listCourses.items));
    return allCourses.data.listCourses.items;
};