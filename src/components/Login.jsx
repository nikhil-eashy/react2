import { TextField, Typography, Button } from '@mui/material'
import { colorChannel } from '@mui/system'
import React from 'react'

const Login = () => {
  return (
    <div>
    <Typography variant='h3'>Login</Typography><br></br><br></br>
   <TextField id="outlined-basic" label="Email" variant="outlined" color="secondary"/>
   <br></br>
   <TextField id="filled-basic" label="Password" variant="filled" type={'password'}/><br></br><br></br>
   <Button variant="contained">Login</Button>

    
    </div>
  )
}

export default Login
