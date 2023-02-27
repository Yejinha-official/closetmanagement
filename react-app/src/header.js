import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div>
           <Typography variant="h6">My App</Typography>
        </div>
        <div>
          {isLoggedIn ? (
             <Button color="inherit" onClick={handleLogout}>Logout</Button>
           ) : (
            <Button color="inherit">Login</Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
