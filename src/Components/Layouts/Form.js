import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText, FormControlLabel, makeStyles  } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '10px auto 0px',
    maxWidth: '300px',
    position: 'relative',
    backgroundColor: 'white'
},
outer: {
  backgroundColor: "#151a20",
  padding: '30px',
}
}))

export default function InputForm() {
    const classes = useStyles();
  return (
    <div className={classes.outer}>
  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Job Title</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Company Name</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Url Address</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Contact Name</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Email address</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">LinkedIn Name</InputLabel>
    <Input id="my-input"  />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="my-input">Phone #</InputLabel>
    <Input id="my-input"  />
  </FormControl>
</div>
  )
};
