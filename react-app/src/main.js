// if users log in, view this main page component 
import React,{useState} from 'react';
import CardComponent from './cards.js';
import { Container, Button, MenuItem, Select, Modal } from '@material-ui/core';
import MyModal from './mymodal';


function Main(){
    let sort ;

    const handleChange=(event)=>{
        alert(event.target.value);
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };


    const handleChildStateChange = (childState) => {
        setOpen(childState);
      };

    const handleChildSubmit = (inputValue) => {
        alert(`Received input value from child component: ${inputValue}`);
      };

    return(
        <main>
            <Container maxWidth='md'>
             <div className='right'>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    옷 추가 
                </Button>
                <Modal open={open}>
                     <MyModal onChildStateChange={handleChildStateChange} onSubmit={handleChildSubmit}></MyModal>
                </Modal>
                <Select value={sort} onChange={handleChange}>
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