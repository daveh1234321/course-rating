const validation = (course) => {
    let error = {};
    Object.entries(course).map(([key, value]) => {
        if (value === "" || value === null) {
            Object.assign(error, { [key]: 'This field cannot be empty'})
        }
        return error
    })
    return error;
  };

export default validation;