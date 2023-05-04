import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button, autocompleteClasses } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function Add() {
 
    const{register,handleSubmit} =useForm();
  const getVal=(val)=>{
    alert('Form Submitted');
    axios.post('https://reqres.in/api/users',val).then((response)=>{
      alert(`The data is posted with id ${response.data.id}`)
    })
 }
  return (
    <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'35%',
         width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
        
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Employee Location"
        variant="outlined"
      />
      <TextField
      name='empdesignation'
      {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Employee Designation"
        variant="outlined"
      />
      <Button onClick={handleSubmit(getVal)} variant="contained">Submit</Button>
    </Stack>
  );
}