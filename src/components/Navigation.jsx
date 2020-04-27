import React from 'react';
import { Typography } from '@material-ui/core';


const Navigation = () => {
  return (
    <>
      <nav style={{ display: 'inline-flex', alignItems: 'center', paddingTop: '1%' }}>
        <Typography color="secondary" style={{ fontSize: 'x-large', fontWeight: 600 }}>Course Ratings</Typography>
      </nav>
      <hr style={{ width: '95%' }} />
    </>
  )
}
export default Navigation;