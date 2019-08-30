import React, {useState } from 'react';
import { makeStyles  } from '@material-ui/core';
import Form from './Form';


const useStyles = makeStyles(theme => ({
  root: {
    margin: '100px 0'

},
}))

export default function ProspectList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <p>{localStorage.getItem('label')}</p>

    </div>
  )
}
