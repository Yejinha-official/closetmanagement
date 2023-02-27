// if users log in, view this main page component 
import React from 'react';
import CardComponent from './cards.js';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Container } from '@material-ui/core';


function Main(){
    var age ;

    const handleChange=(event)=>{
        alert(event.target.value);
    };

    return(
        <main>
            <Container maxWidth='md'>
             <div className='right'>
                <Button variant="contained" color="primary">
                    옷 추가 
                </Button>
                <Select value={age} onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
             </div>
             </Container>
             <CardComponent></CardComponent>
        </main>
    )
}

export default Main;