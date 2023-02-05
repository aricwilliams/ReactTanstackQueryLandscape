import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';


// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

export default function UserForm() {
//   const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
      <TextField
        id="name"
        label="Name"
        margin="normal"
      />
      <TextField
        id="address"
        label="Address"
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        margin="normal"
      />
      <TextField
        id="phone"
        label="Phone Number"
        margin="normal"
      />
    </form>
  );
}