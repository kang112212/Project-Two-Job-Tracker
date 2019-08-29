import React from 'react';
import { FormControl, Input, InputLabel, makeStyles  } from '@material-ui/core';
import Exercises from '../Exercises/index'


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
},
inner: {
  display: 'flex',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
},

}))

export default function InputForm() {
    const classes = useStyles();

  return (
    <div className={classes.outer}>
  <FormControl className={classes.root}>
    <InputLabel htmlFor="title--input" className={classes.inner}>Job Title</InputLabel>
    <Input id="title-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="company-input" className={classes.inner}>Company Name</InputLabel>
    <Input id="company-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="url-input" className={classes.inner}>Url Address</InputLabel>
    <Input id="url-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="contact-input" className={classes.inner}>Contact Name</InputLabel>
    <Input id="contact-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="email-input" className={classes.inner}>Email address</InputLabel>
    <Input id="email-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="linkedIn-input" className={classes.inner}>LinkedIn Name</InputLabel>
    <Input id="linkedIn-input" />
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel htmlFor="phone-input" className={classes.inner}>Phone #</InputLabel>
    <Input id="phone-input" />
  </FormControl>

  // <button onClick={this.state.clickFunc}> Click Me?</button>
</div>
  )
};
