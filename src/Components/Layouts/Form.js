import React, {useState } from 'react';
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
button: {
  display: 'flex',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
}
}))
let idArray = ['title-input', 'company-input', 'url-input', 'contact-input', 'email-input', 'linkedIn-input', 'phone-input']
let inputArray = []


export default function InputForm() {
    const classes = useStyles();
    const [useDataCollect] = useState([
      {
        clickFunc: () => {
          for (let i=0; i<idArray.length; i++){
            inputArray[i] = document.getElementById(idArray[i]).value
          }
          return console.log(inputArray)
      }
    }
    ])

  return (
    <div className={classes.outer}>
  <FormControl className={classes.root}>
    <InputLabel  className={classes.inner}>Job Title</InputLabel>
    <Input id="title-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel  className={classes.inner}>Company Name</InputLabel>
    <Input id="company-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel  className={classes.inner}>Url Address</InputLabel>
    <Input id="url-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel className={classes.inner}>Contact Name</InputLabel>
    <Input id="contact-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel className={classes.inner}>Email address</InputLabel>
    <Input id="email-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel  className={classes.inner}>LinkedIn Name</InputLabel>
    <Input id="linkedIn-input" className={classes.inner}/>
  </FormControl>

  <FormControl className={classes.root}>
    <InputLabel  className={classes.inner}>Phone #</InputLabel>
    <Input id="phone-input" className={classes.inner}/>
  </FormControl>

<button className="classes.button" onClick={useDataCollect[0].clickFunc}> Click Me?</button>
</div>
  )
};
