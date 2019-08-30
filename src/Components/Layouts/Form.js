import React, {useState } from 'react';
import { FormControl, Input, InputLabel, makeStyles  } from '@material-ui/core';



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
    marginTop: '10px',
    backgroundColor: '#f3a850',
    borderColor: '#f3a850',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '14px'
  },
}))
let idArray = ['title-input', 'company-input', 'url-input', 'contact-input', 'email-input', 'linkedIn-input', 'phone-input']


export default function InputForm(props) {
    let classes = useStyles();
    let inputArray = []
    let sessStorage = []
    let [useDataCollect] = useState([
      {
        clickFunc: () => {

          for (let i=0; i<idArray.length; i++){
            inputArray[i] = document.getElementById(idArray[i]).value
          }

          let prospectObj ={
            'jobTitle': inputArray[0],
            "Company Name": inputArray[1],
            "Url Address": inputArray[2],
            "Contact Name": inputArray[3],
            "Email address": inputArray[4],
            "LinkedIn Name": inputArray[5],
            "Phone #": inputArray[6],

          }

          props.addProspectFunc(prospectObj);

          // let j = 0;
          // while (j>-1){
          //   return sessStorage[j] = localStorage.setItem('label', inputArray);
          //   j++;
          // }
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


<button className={classes.button} onClick={useDataCollect[0].clickFunc}> Submit New Prospect</button>

</div>

  )
};
