import React from 'react';
import { Typography } from '@material-ui/core';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Navigation = () => {
  return (
    <>
      <nav>
        <Typography className='navTitle'>Course Ratings</Typography>
        <AmplifySignOut className='amplifySignOut' />
      </nav>
      <hr className='navDivider' />
    </>
  )
}
export default Navigation;