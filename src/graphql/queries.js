/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      date
      description
      rating
      comments
      courseLink
      codeLink
      creator
      length
      completed
      courseLocation
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        description
        rating
        comments
        courseLink
        codeLink
        creator
        length
        completed
        courseLocation
      }
      nextToken
    }
  }
`;
