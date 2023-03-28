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
        id="cardTitle"
        label="Card Title"
        margin="normal"
      />
      <TextField
        id="dayRange"
        label="Day Range"
        margin="normal"
      />
      <TextField
        id="cardTotal"
        label="Card Total"
        margin="normal"
      />
      <TextField
        id="cardTotalDetailcardTotalDetail"
        label="Card Total Detail"
        margin="normal"
      />
    </form>
  );
}