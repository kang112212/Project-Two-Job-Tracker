import React, {useState } from 'react';
import { FormControl, Input, InputLabel, makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom"



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '10px auto 0px auto',
    maxWidth: '300px',
    position: 'relative',
    backgroundColor: 'white',
  },
  outer: {
    backgroundColor: "#151a20",
    padding: '60px 60px 10px 60px',
    minHeight: "90vh",

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
    margin: '5px auto 60px auto',
    backgroundColor: '#f3a850',
    borderColor: '#f3a850',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '14px'
  },
}))

export default function InputForm(props) {
    let classes = useStyles();

    const [title, setJobTitle] = useState('');
    const [coName, setCompanyName] = useState('');
    const [url, setUrlAddress] = useState('');
    const [contact, setContactName] = useState('');
    const [email, setEmailAddress] = useState('');
    const [linkedIn, setLinkedInName] = useState('');
    const [phoneNum, setPhone] = useState('');

    let prospectObj;
    let clickFunc = () => {
      prospectObj = {
         jobTitle: title,
         companyName: coName,
         urlAddress: url,
         ContactName: contact,
         emailAddress: email,
         linkedInName: linkedIn,
         phone: phoneNum,
      };
      props.addProspectFunc(prospectObj);
    }

      const handleTitleInput = e => {
        setJobTitle(e.target.value);
      };
      const handleCoNameInput = e => {
        setCompanyName(e.target.value);
      };
      const handleUrlInput = e => {
        setUrlAddress(e.target.value);
      };
      const handleContactInput = e => {
        setContactName(e.target.value);
      };
      const handleEmailAddressInput = e => {
        setEmailAddress(e.target.value);
      };
      const handleLinkedInNameInput = e => {
        setLinkedInName(e.target.value);
      };
      const handlePhoneInput = e => {
        setPhone(e.target.value);
      };

  return (

    <div className={classes.outer}>
      <FormControl className={classes.root}>
        <InputLabel  className={classes.inner}>Job Title</InputLabel>
        <Input onChange={handleTitleInput} id="title-input" className={classes.inner}/>
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel  className={classes.inner}>Company Name</InputLabel>
        <Input onChange={handleCoNameInput} id="company-input" className={classes.inner}/>
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel  className={classes.inner}>Url Address</InputLabel>
        <Input onChange={handleUrlInput} id="url-input" className={classes.inner} />
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel className={classes.inner}>Contact Name</InputLabel>
        <Input onChange={handleContactInput} id="contact-input" className={classes.inner}/>
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel className={classes.inner}>Email address</InputLabel>
        <Input onChange={handleEmailAddressInput} id="email-input" className={classes.inner}/>
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel  className={classes.inner}>LinkedIn Name</InputLabel>
        <Input onChange={handleLinkedInNameInput} id="linkedIn-input" className={classes.inner}/>
      </FormControl>

      <FormControl className={classes.root}>
        <InputLabel  className={classes.inner}>Phone #</InputLabel>
        <Input onChange={handlePhoneInput} id="phone-input" className={classes.inner}/>
      </FormControl>
      <Link to="/ExistProspectPage">
        <button className={classes.button} onClick={clickFunc}> Submit New Prospect</button>
      </Link>
</div>

  )
};
