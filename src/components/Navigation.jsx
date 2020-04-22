import React from 'react';
import { Typography, IconButton, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


const Navigation = () => {
  return (
    <>
      <nav style={{ display: 'inline-flex', alignItems: 'center', paddingTop: '1%' }}>
        <Typography style={{ color: 'white', fontSize: 'x-large', fontWeight: 600 }}>Course Ratings</Typography>
        <Button variant="outlined" style={{ right: '-158%', color: 'white', borderColor: 'white' }}>Sign in</Button>
      </nav>
      <hr style={{ width: '95%' }} />
    </>
  )
}
export default Navigation;