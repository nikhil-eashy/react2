import { TextField, Button, Typography, InputAdornment } from '@mui/material'
import React from 'react'
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Signup = () => {
  return (
    <div>
        <Typography variant="h3" component="h2">
Sign In
</Typography>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon></AccountCircleIcon>
            </InputAdornment>
          ),
        }}id="standard-basic" label="First Name" variant="standard" /><br></br>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon></AccountCircleIcon>
            </InputAdornment>
          ),
        }}id="standard-basic" label="Second Name" variant="standard" /><br></br>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon></AlternateEmailIcon>
            </InputAdornment>
          ),
        }}id="standard-basic" label="E mail" variant="standard" /><br></br>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon></KeyIcon>
            </InputAdornment>
          ),
        }} id="standard-basic" label="Password" variant="standard" type={'password'}/><br></br><br></br>
      <Button variant="outlined" color='primary'>Sign In</Button>
    </div>
  )
}

export default Signup
