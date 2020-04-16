import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

export const courseMutation = async (course) => {
    const newCourse = await API.graphql(graphqlOperation(mutations.createCourse, {input: course}));
    alert(JSON.stringify(newCourse));
    return newCourse;
};
  
  
export const listCourses = async () => {
    console.log('Listing courses');
    const allCourses = await API.graphql(graphqlOperation(queries.listCourses));
    console.log(allCourses);    
    alert(JSON.stringify(allCourses));
    return allCourses;
};