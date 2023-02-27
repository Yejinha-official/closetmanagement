import React, { useState } from 'react';
import Main from './main';

function Body(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLogin() {
        // perform login logic here
        setIsLoggedIn(true);
      }
      
    return (
      <div>
        {isLoggedIn ? (
          <Main></Main>
        ) : (
          <div> Log in please</div> 
        )}
      </div>
    );
}


export default Body;
