import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Footer() {
  return (
    <AppBar position="fixed" color="primary" style={{ top: 'auto', bottom: 0}}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          My App &copy; {new Date().getFullYear()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
