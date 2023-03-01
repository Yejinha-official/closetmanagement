import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  fileInput: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function MyModal(props,{onSubmit}) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const handleStateChange = () => {
    props.onChildStateChange(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    // form submit action logic
    props.onChildStateChange(false);
  };




  return (
        <div>
            <div className={classes.paper}>
            <h2 id="simple-modal-title">옷 추가</h2>
            <FormControl className={classes.formControl} onSubmit={handleSubmit}>
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                  <div> 옷 종류</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                  labelId="select-label"
                  id="sort"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  input={<Input />}
                  >
                  <MenuItem value="outer">외투</MenuItem>
                  <MenuItem value="top">상의</MenuItem>
                  <MenuItem value="bottom">하의</MenuItem>
                  <MenuItem value="shoes">신발</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div> 계절</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                  labelId="select-label"
                  id="season"
                  value={selectedOption}
                  onChange={handleOptionChange}
                  input={<Input />}
                  >
                  <MenuItem value="spring">봄</MenuItem>
                  <MenuItem value="summer">여름</MenuItem>
                  <MenuItem value="fall">가을</MenuItem>
                  <MenuItem value="winter">겨울</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div> 옷 사진</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <input
                      accept="image/*"
                      className={classes.fileInput}
                      id="image-upload"
                      multiple
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="image-upload">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      className={classes.button}
                    >
                    Upload Image
                    </Button>
                    </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleStateChange}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>  
            </FormControl>
            </div>
        </div>
  );
}

export default MyModal;
