import React from 'react';
import { Typography } from '@material-ui/core';


const Navigation = () => {
  return (
    <>
      <nav>
        <Typography className='navTitle' color="secondary">Course Ratings</Typography>
      </nav>
      <hr className='navDivider' />
    </>
  )
}
export default Navigation;